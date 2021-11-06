import React from 'react'

import styles from './delete-modal.scss'

import {
	ErrorStripe,
} from '../../components';

import {
	Modal
} from '../layouts/modal';

import {
	Button
} from '../form'

import {
	useMutation,
	useRelayEnvironment,
	ConnectionHandler,
	GraphQLTaggedNode,
} from 'react-relay';

type Props = {
	callBack: (a) => void,
	items: (string|number)[]|null,
	setItems: (a: null) => void,
	children: React.ReactNode
	title: React.ReactNode
	query: GraphQLTaggedNode
	paginationKey: string
};

const content = Content.generalModals.delete;

type DeleteProps = Pick<Props, 'children'|'title'> & {
	call: () => void
	close: () => void
	loading?: boolean
	error?: string|undefined
};

export function DeleteModalComponent(props: DeleteProps) {
	return (
		<Modal close={props.close}>
			<div className={styles.modalDelteBody} >
				<Modal.Title>
					{props.title}
					<i className="icon-cancel-music" onClick={props.close}/>
				</Modal.Title>
				<Modal.Body className="body" >
					{
						props.error && (
							<ErrorStripe message={props.error}/>
						)
					}
					{props.children}
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="btnCancel"
						onClick={props.close}
						children={content.cancel}
					/>
					<Button
						spinning={props.loading}
						// blockOn={props.queries}
						danger
						children={content.delete}
						onClick={
							props.call
						}
					/>
				</Modal.Footer>
			</div>
		</Modal>
	)
}
