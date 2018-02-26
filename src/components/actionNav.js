import React, {Component} from 'react';
import PriceCalc from './../utilities/priceCalc';

export default class ActionNav extends Component {
	
	render(){
		
		const {items, onReset, onCheckout} = this.props;
		const count = PriceCalc.getItemsCount(items);
		
		return (<div className="action-nav">
			
			<span className="action-nav-text">{count ? count : 'No'} item{count === 1 ? '' : 's'} selected, for a  total price of {PriceCalc.getTotalPrice(items).toFixed(2)}$.</span>
			
			<div className="action-nav-cta">
				<button onClick={onReset} className="mod-cancel">reset</button>
				<button onClick={onCheckout} className={!count ? 'mod-disabled' : ''}>checkout</button>
			</div>
			
		</div>);
		
	}
	
}