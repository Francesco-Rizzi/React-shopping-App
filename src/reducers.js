import _ from 'lodash';

const initialState = {
	items     : {},
	editingId : false
};

let fetchedItems={};

export default function shoppingBasketApp( state = initialState, action ){
	switch ( action.type ) {
		
		case 'FETCH_ITEMS':
			fetchedItems = _.mapKeys(action.payload, 'id');
			return {
				...state,
				items : _.cloneDeep(fetchedItems)
			};
		
		case 'SELECT_ITEM':
			return {
				...state,
				editingId : action.id
			};
		
		case 'EDIT_ITEM':
			
			let {id, quantity} = action.item;
			let newState       = {
				...state
			};
			
			newState.items[ id ].quantity = quantity;
			return newState;
		
		case 'RESET':
			
			return {
				...state,
				items: _.cloneDeep(fetchedItems)
			};
		
		default:
			return state;
		
	}
}