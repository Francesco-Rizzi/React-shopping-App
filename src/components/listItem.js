import React, {Component} from 'react';
import PriceCalc from './../utilities/priceCalc';

export default class ListItem extends Component {
	
	render(){
		
		const item = this.props.item;
		
		return (<li className="app-list-item">
			<span className="app-list-item-name">{item.name}: {this.createDiscount(item)}</span> {this.createButton(item)}
		</li>);
		
	}
	
	createDiscount( item ){
		
		if ( item.discount > 0 ) {
			
			return (<span className="app-list-item-price mod-discount">
				<del>{item.price.toFixed(2)}</del> {PriceCalc.getItemFinalPrice(item).toFixed(2)}$ <span>{item.discount}% off!</span>
			</span>);
			
		}
		
		return <span className="app-list-item-price">{item.price.toFixed(2)}$</span>;
		
	}
	
	createButton( item ){
		
		let text = item.quantity > 0 ? `EDIT (${item.quantity})` : 'BUY';
		
		return <button onClick={this.props.onItemWillEdit}>{text}</button>;
		
	}
	
}