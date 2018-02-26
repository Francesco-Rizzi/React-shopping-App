import _ from 'lodash';

export default class PriceCalc {
	
	static getItemFinalPrice( item ){
		let price = 0;
		if ( item.discount > 0 ) {
			price = item.price / 100 * (100 - item.discount);
		} else {
			price = item.price;
		}
		return Number(price).toFixed(2);
	}
	
	static getItemsCount( items ){
		return _.reduce(items, ( initial, item ) =>{
			return initial + Number(item.quantity);
		}, 0);
	}
	
	static getTotalPrice( items ){
		return _.reduce(items, ( initial, item ) =>{
			return initial + +this.getTotalPricePerItem(item);
		}, 0);
	}
	
	static getTotalPricePerItem(item){
		return (this.getItemFinalPrice(item) * item.quantity).toFixed(2);
	}
	
}