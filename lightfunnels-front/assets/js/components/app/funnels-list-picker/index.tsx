import React from 'react';

import {
	AsyncSelectComponent,
	Button,
} from '../..';

import type {AsyncSelectComponentProps} from '../..';

import styles from '../product-list.scss';

import {
	graphql
} from 'react-relay';

const content = Content.funnelsList;

export type Props = {
	label?: string
	value: number|null,
	onChange: (v: Props["value"]) => void
	cancellable?: boolean
	error?: string
	menuProps?: AsyncSelectComponentProps["menuProps"]
	placement?: AsyncSelectComponentProps["placement"]
	labelClassName?: AsyncSelectComponentProps["labelClassName"]
	outOfCard?: AsyncSelectComponentProps["outOfCard"]
}

export function FunnelsListPicker(props: Props) {
	return (
		<FunnelsListPickerApp
			{...props}
			query={FunnelsQuery}
			fragment={FunnelsPaginationFragment}
		/>
	)
}

export function FunnelsListPickerApp(props: Props & {noCreateButton?: boolean; query: typeof FunnelsQuery; fragment: typeof FunnelsPaginationFragment}) {
	return (
		<AsyncSelectComponent
			{...props}
			label={props.label || "All funnels"}
			query={props.query}
			fragment={props.fragment}
			loader='Funnel'
			map={
				function (funnel) {
					return {
						value: funnel.node._id,
						label: funnel.node.name,
					}
				}
			}
			emptySearchText={content.emptySearchText}
			emptyState={
				function() {
					return (
						<div className={styles.emptyState}>
							<div className="text">
								{content.text}
							</div>
							<Button
								className="button"
								children={content.button}
								onClick={
									function() {
										// normally here, we need to check for the window first
										// because some browsers don't block this codes
										const win = window.open("/admin/funnel/new", "_blank");
									  win!.focus();
									  close();
									}
								}
								block
							/>
						</div>
					)
				}
			}
		/>
	)
}

const FunnelsQuery = graphql`
	query funnelsListPickerQuery($first: Int, $after: String, $query: String!){
		...funnelsListPickerPagination
	}
`;

const FunnelsPaginationFragment = graphql`
  fragment funnelsListPickerPagination on Query @refetchable(queryName: "funnelsListPaginationQuery") {
  	pagination: funnels(first: $first, after: $after, query: $query) @connection(key: "funnels_pagination", filters:["query"]){
  		edges{
  			node{
  				id
  				_id
  				name
  				slug
  				created_at
  			}
  		}
  		pageInfo{
  			endCursor
  			hasNextPage
  		}
  	}
  }
`;
