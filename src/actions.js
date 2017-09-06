export function fetchItems(){
	return {
		type    : 'FETCH_ITEMS',
		payload : [ {
			name     : 'Apples',
			id       : 1,
			price    : '0.25',
			discount : '0',
			quantity : 0
		}, {
			name     : 'Oranges',
			id       : 2,
			price    : '0.30',
			discount : '10',
			quantity : 0
		}, {
			name     : 'Bananas',
			id       : 3,
			price    : '0.15',
			discount : '0',
			quantity : 0
		}, {
			name     : 'Papayas',
			id       : 4,
			price    : '0.50',
			discount : '40',
			quantity : 0
		} ]
	}
}

export function reset(){
	return {
		type : 'RESET'
	}
}

export function editItem( id, quantity ){
	return {
		type : 'EDIT_ITEM',
		item : {
			id,
			quantity
		}
	}
}

export function selectItem( id){
	return {
		type : 'SELECT_ITEM',
		id
	}
}