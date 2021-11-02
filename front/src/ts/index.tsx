import React, {Suspense, Fragment} from 'react';
import {render} from 'react-dom';
import store from 'store';
import qs from 'qs';
import DataLoader from 'dataloader';

import {
	Router,
	Route,
	Switch,
} from 'react-router-dom';

import {Relay} from './relay'

import {
	Card,
	AddLink,
	LoadingSpinner,
	ErrorBoundary,
	Button,
	Modal,
	useRelayErrors,
	ErrorStripe,
	FormGroup,
	InputComponent,
	DeleteModalComponent,
	FunnelsListPickerApp,
} from '../../../lightfunnels-front/assets/js/components';

import {
	useLocalStore,
	Loaders,
} from '../../../lightfunnels-front/assets/js/data';

import {createBrowserHistory} from 'history';

import {
	useLazyLoadQuery,
	graphql,
	useRelayEnvironment,
	fetchQuery,
	useMutation,
	loadQuery,
	usePreloadedQuery,
} from 'react-relay';

import type {tsAppQuery, tsAppQueryResponse} from './__generated__/tsAppQuery.graphql';
import type {tsFunnelsListQuery} from './__generated__/tsFunnelsListQuery.graphql';
import type {tsConnectMutation} from './__generated__/tsConnectMutation.graphql';
import type {tsConnectRespMutation} from './__generated__/tsConnectRespMutation.graphql';
import type {tsDeleteMutation} from './__generated__/tsDeleteMutation.graphql';
import type {tsCreateMutation} from './__generated__/tsCreateMutation.graphql';

import '../styles/style.scss';

const history = createBrowserHistory();

render(
	<div className="appContainer">
		<Router history={history}>
			<Switch>
				<Route path="/app" component={Middleware} />
				<Route path="/redirects/shopify" component={Redirect} />
				<Route component={Home} />
			</Switch>
		</Router>
	</div>,
	window.app
);

function Redirect(props) {
	// const q = React.useMemo(() => {
	// 	return qs.parse(props.location.search, {ignoreQueryPrefix: true});
	// }, [props.location.search]);

	const code = props.location.search;

	React.useEffect(
		function() {
			if(code){
				// sent code to parent
				window.opener.postMessage({code, from: 'shopify'}, '*');
				window.close();
			}
		}, [code]
	);

	return (
		<div className="redirect">
      <LoadingSpinner />
	  </div>
	)
}

function setupLoaders(env){
	return {
		Funnel: new DataLoader<number, {name: string, id: string, _id: number}>(
			function (ids) {
				return fetchQuery<tsFunnelsListQuery>(
					env,
					funnelsListQuery,
					{
						ids: ids
					}
				)
				.toPromise()
				.then(
					function(response){
						return response.funnelsList
					}
				)
			}
		),
	}
}

function Provider(props: {children: React.ReactNode}) {
	const env = useRelayEnvironment();

	const loaders = React.useMemo(
		function () {
			return setupLoaders(env);
		},
		[env]
	);

	return (
		<Loaders.Provider value={loaders as any}>
			{props.children}
		</Loaders.Provider>
	)
}

function Middleware(props){
	
	const q = React.useMemo(() => {
		return qs.parse(props.location.search, {ignoreQueryPrefix: true});
	}, [props.location.search]);

	const [token, setToken] = React.useState<undefined|string>(() => {
		return q['installation-id'] && store.get(installToKey(q['installation-id']))
	});

	React.useEffect(
		function(){

			if(q.code && q.state && q['account-id']){
				fetch(process.env.ApiURL + 'lightfunnels/connect-response', {
					method:'POST',
					headers:{
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						code: q.code,
						state: q.state,
						accountID: q['account-id']
					})
				})
				.then(resp => resp.json())
				.then(function(resp){
					store.set(installToKey(resp.id), resp.token);
					setToken(resp.token);
				});
			} else if(!token && q['account-id']){
				fetch(process.env.ApiURL + 'lightfunnels/connect-url', {
					method:'POST',
					headers:{
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						accountID: q['account-id'],
						redirectUrl: window.location.origin + '/app'
					})
				})
				.then(resp => resp.text())
				.then(function(resp){
					// console.log('1-',resp);
					window.location.href = resp;
				});
			}

		},[]
	);
	if(!token){
		return (
			<Fragment children={<LoadingSpinner />} />
		);
	}
	
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Relay token={token}>
				<Provider>
					<ErrorBoundary>
						<App token={token} />
					</ErrorBoundary>
				</Provider>
			</Relay>
		</Suspense>
	);
}

function App(props){
	const [state, open, close] = Modal.useModalState();

	// fetch infos
	const resp = useLazyLoadQuery<tsAppQuery>(
		graphql`
			query tsAppQuery($offset: Int){
				records(offset: $offset){
					payment_id
				  order_id
				  shopify_order_id
				  created_at
				}
				connections{
				  id
				  _id
				  shop{
				  	id
				  	shop
				  }
				  funnel{
				  	id
				  	name
				  }
				}
				account{
					id
					shops {
						_id
						id
  					shop
					}
				}
			}
		`,
		{}
	);

	const [connectResponse, loading] = useMutation<tsConnectRespMutation>(
		graphql`
			mutation tsConnectRespMutation($query: String!){
				connectShopifyResponse(query: $query) {
					id
  				shops {
						_id
						id
  					shop
					}
				}
			}
		`
	);

	const account = resp.account;
	const connections = resp.connections;
	const records = resp.records;

	const isConnected = account.shops.length>0;

	const [isOpen, openForm] = React.useState<boolean>(false);
	const [del, setDel] = React.useState<number|null>(null);
	const [onError, errors, setErrors] = useRelayErrors();
	const [deleteCon, deleteConLoading] = useMutation<tsDeleteMutation>(
		graphql`
			mutation tsDeleteMutation($id: Int!){
				deleteConnection(id: $id)
			}
		`
	);

	React.useEffect(
		function() {
			function receiveMessage(e) {
				if(e.data.from === 'shopify'){
					connectResponse({
						variables: {
							query: e.data.code
						}
					})
				}
			}
			window.addEventListener('message', receiveMessage);

			return function() {
				window.removeEventListener('message', receiveMessage);
			}
		}, []
	);

	return (
		<div className="app">
			{
				del && (
					<DeleteModalComponent
						children="Are you sure you want to delete this connection? It can't be undone."
						title="Delete Connection"
						error={errors[""]}
						close={close}
						loading={deleteConLoading}
						call={
							function () {
								deleteCon({
									variables:{
										id: del
									},
									onError,
									updater(store){
										const root = store.getRoot();
										const newCons = root.getLinkedRecords('connections')!.filter(w => w.getValue('_id') !== del);
										root.setLinkedRecords(newCons, "connections");
									},
									onCompleted(data){
										if(data.deleteConnection){
											setDel(null);
										}
									}
								});
							}
						}
					/>
				)
			}
			{
				state && (
					<ModalShopify close={close} />
				)
			}
			<Button
				className="connectButton"
				children="Connect Shopify Store"
				primary
				spinning={loading}
				onClick={open}
			/>
			<Card
				title="Connected Stores"
			>
				{
					(account.shops.length>0) ? (
						<div className="table">
							<div className="head">
								<div className="row">
									<div className="th">
										ID
									</div>
									<div className="th">
										Store
									</div>
								</div>
							</div>
							{
								account.shops.map(
									function(shop) {
										return(
											<div className="row" key={shop._id}>
												<div className="td">
													{shop._id}
												</div>
												<div className="td">
													{shop.shop}
												</div>
											</div>
										)
									}
								)
							}
						</div>
					) : (
						<div className="emptyText">
							There are no shops connected yet.
						</div>
					)
				}
			</Card>
			<Card
				title="Records"
			>
				{
					(records.length>0) ? (
						<div className="table">
							<div className="head">
								<div className="row">
									<div className="th">
										Payment ID
									</div>
									<div className="th">
										Order ID
									</div>
									<div className="th">
										Shopify Order ID
									</div>
								</div>
							</div>
							{
								records.map(
									function(rec) {
										return(
											<div className="row" key={rec.payment_id}>
												<div className="td">
													{rec.payment_id}
												</div>
												<div className="td">
													{rec.order_id}
												</div>
												<div className="td">
													{rec.shopify_order_id}
												</div>
											</div>
										)
									}
								)
							}
						</div>
					) : (
						<div className="emptyText">
							There are no records connected yet.
						</div>
					)
				}
			</Card>
			<Card
				title="Connections"
				actions={
					isConnected ? <AddLink children="Add Connection" onClick={() => openForm(true)} /> : null
				}
			>
				{
					(connections.length>0) ? (
						<div className="table">
							<div className="head">
								<div className="row">
									<div className="th">
										ID
									</div>
									<div className="th">
										Store
									</div>
									<div className="th">
										Funnel
									</div>
								</div>
							</div>
							{
								connections.map(
									function(con) {
										return(
											<div className="row" key={con._id}>
												<div className="td">
													{con._id}
												</div>
												<div className="td">
													{con.shop.shop}
												</div>
												<div className="td">
													{con.funnel?.name}
												</div>
												<div className="td">
													<span
														className="delete"
														onClick={
															() => {
																setDel(con._id);
															}
														}
														>
													<i className="icon-bin"></i><span>Disconnect</span>
													</span>
												</div>
											</div>
										)
									}
								)
							}
						</div>
					) : (
						<div className="emptyText">
							There are no connections yet.
						</div>
					)
				}
			</Card>
			{
				isOpen && (
					<ConnectionForm closeForm={() => openForm(false)} shops={account.shops as tsAppQueryResponse['account']['shops']}/>
				)
			}
		</div>
	)
}


function ConnectionForm(props: {closeForm: () => void; shops: tsAppQueryResponse['account']['shops'];}){
	const [onError, errors, setErrors] = useRelayErrors();
	const [create, loading] = useMutation<tsCreateMutation>(
		graphql`
			mutation tsCreateMutation($node: ConnectionInput!){
				createConnection(node: $node) {
					_id
					id
					shop{
				  	id
				  	shop
				  }
				  funnel{
				  	id
				  	name
				  }
				}
			}
		`
	);

	const [state, onChange] = useLocalStore<{shop: number|null; funnel: number|null}>({
		shop: null,
		funnel: null
	});

	return(
		<Card title="Add Connection">
			{
				errors[''] && <ErrorStripe message={errors['']} />
			}
			{
				errors.shop_id && <ErrorStripe message={errors.shop_id} />
			}
			<div className="form">
				<FormGroup label="List (required)">
					<Shops
						shops={props.shops}
						shop={state.shop}
						onChange={(s: number) => onChange(['shop'], s)}
					/>
				</FormGroup>
				<FormGroup label="Funnel">
					<FunnelsListPickerApp
						cancellable
						error={errors.funnel_id}
						fragment={funnelsPaginationFragment}
						query={funnelsQuery}
						label="No Funnels"
						value={state.funnel}
						noCreateButton
						onChange={
							function(funnel_id){
								onChange(['funnel'], funnel_id);
							}
						}
					/>
				</FormGroup>
				<Button
					disabled={!state.shop || !state.funnel}
					className="createButton"
					children="Create Connection"
					spinning={loading}
					primary
					onClick={
						function() {
							create({
								variables: {
									node: {
										funnel_id: state.funnel as number,
										shop_id: state.shop as number
									}
								},
								onError,
								updater(store, data) {
									const root = store.getRoot();
									root.setLinkedRecords(
										root.getLinkedRecords('connections')!.concat(store.getRootField('createConnection')),
										"connections"
									);
								},
								onCompleted(){
									props.closeForm();
								}
							})
						}
					}
				/>
			</div>
		</Card>
	)
}

function Shops(props: {shops: tsAppQueryResponse['account']['shops']; shop: number|null; onChange: (l: number) => void}){
	const shops = props.shops;

	return (
		<Fragment>
			{
				(shops.length > 0) ? (
					<div className="listsGrid">
						{
							shops.map(
								function(s) {
									const isSelected = props.shop === s._id;
									return (
										<div
											className={`list ${isSelected ? 'active' : ''}`}
											key={s._id}
											onClick={
												function() {
													props.onChange(s._id);
												}
											}
										>
											{s.shop}
										</div>
									)
								}
							)
						}
					</div>
				) : (
					<div className="emptyTags">
						There are no lists
					</div>
				)
			}
		</Fragment>
	)
}

function Home(){
	return (
		<div className="home">
			<div>
				Welcome to the Lightfunnels' Shopify application.
			</div>
			<a href="https://lightfunnels.com/admin/apps" className="install">
				Install app
			</a>
		</div>
	)
}

export function ModalShopify(props: {close: () => void}) {
	const [onError, errors, setErrors] = useRelayErrors();
	const [state, onChange] = useLocalStore({
		store: '',
	})

	const [connect, loading] = useMutation<tsConnectMutation>(
		graphql`
			mutation tsConnectMutation($shop: String!, $redirectUri: String!) {
				connectShopifyUrl(shop: $shop, redirectUri: $redirectUri)
			}
		`
	);

	return(
		<Modal close={props.close}>
			<div className="modalConnect">
				<Modal.Title>
					Connect to Shopify
					<i
						className="icon-cancel-music"
						onClick={
							function() {
								props.close();
							}
						}
					/>
				</Modal.Title>
				<Modal.Body className="modalBody">
					{
						errors[""] && (
							<ErrorStripe message={errors[""]} />
						)
					}
					<div className="text">Enter your Shopify store to connect it to Lightfunnels.</div>
					<FormGroup label="Shopify store URL">
						<InputComponent
							placeholder="yourstore.myshopify.com"
							error={errors['shop']}
							onChange={onChange}
							value={state.store}
							name="store"
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer className="modalFooter" >
					<Button
						className="cancelButton"
						onClick={props.close}
					>
						Cancel
					</Button>
					<Button
						children="Connect Shopify"
						primary
						disabled={state.store.length === 0}
						spinning={loading}
						onClick={
							function () {
								connect({
					    		variables:{
					    			redirectUri: window.location.origin + '/redirects/shopify',
					    			shop: state.store
					    		},
					    		onError,
					    		onCompleted(response){
					    			props.close();
										const features = 'width=800, height=600, left=200, top=200';
        						const child = window.open(response.connectShopifyUrl, '', features);
					    		}
					    	})
							}
						}
					/>
				</Modal.Footer>
			</div>
		</Modal>
	)
}

function installToKey(id){
	return 'i' + id + '_token';
}

const funnelsQuery = graphql`
	query tsFunnelsQuery($first: Int, $after: String, $query: String!){
		...tsFunnelsPagination
	}
`;

const funnelsPaginationFragment = graphql`
  fragment tsFunnelsPagination on Query
  @refetchable(queryName: "tsFunnelsPaginationQuery") {
  	pagination: funnels(first: $first, after: $after, query: $query)
  	@connection(key: "funnels_pagination", filters:["query"]){
  		edges {
				node{
					id
					_id
					name
				}
			}
  		pageInfo{
  			endCursor
  			hasNextPage
  		}
  	}
  }
`;

const funnelsListQuery = graphql`
	query tsFunnelsListQuery($ids: [Int!]!){
		funnelsList(ids: $ids) {
			_id
		  id
		  name
		}
	}
`
