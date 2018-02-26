import itemsData from './itemsData';

export function fetchItems(){
	return {
		type    : 'FETCH_ITEMS',
		payload : itemsData
	};
}

export function reset(){
	return {
		type : 'RESET'
	};
}

export function editItem( id, quantity ){
	return {
		type : 'EDIT_ITEM',
		item : {
			id,
			quantity
		}
	};
}

export function selectItem( id ){
	return {
		type : 'SELECT_ITEM',
		id
	};
}

export function updateClientId(){
	return {
		type : 'UPDATE_CLIENT_ID',
	};
}