import React, {Component} from 'react';
import PriceCalc from './../utilities/priceCalc';

export default class ActionNav extends Component {
	
	render(){
		
		const items = this.props.items;
		const count = PriceCalc.getItemsCount(items);
		
		return (<div className="action-nav">
			
			<span className="action-nav-text">Selected: {count}, Total price: {PriceCalc.getTotalPrice(items)}$</span>
			
			<div className="action-nav-cta">
				<button onClick={this.props.onReset} className="mod-cancel">reset</button>
				<button onClick={this.props.onCheckout} className={!count ? 'mod-disabled' : ''}>checkout</button>
			</div>
			
		</div>);
		
	}
	
}