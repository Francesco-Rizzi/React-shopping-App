import React, {Component} from 'react';
import PriceCalc from './priceCalc';

export default class ListItem extends Component {
	
	render(){
		const item = this.props.item;
		
		return <li className="app-list-item">
			<span className="app-list-item-name">{item.name}: {this.createDiscount(item)}</span> {this.createButton(item)}
		</li>
	}
	
	createDiscount( item ){
		if ( item.discount > 0 ) {
			return <span className="app-list-item-price mod-discount">
				<del>{item.price}</del> {PriceCalc.getItemFinalPrice(item)}$ ({item.discount}% off!)</span>
		}
		return <span className="app-list-item-price">{item.price}$</span>
	}
	
	createButton( item ){
		if ( item.quantity > 0 ) {
			return <button onClick={this.props.onItemWillEdit}>EDIT ({item.quantity})</button>
		}
		return <button onClick={this.props.onItemWillEdit}>BUY</button>
	}
	
}