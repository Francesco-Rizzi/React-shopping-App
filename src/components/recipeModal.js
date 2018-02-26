import React, {Component} from 'react';
import _ from 'lodash';
import PriceCalc from './../utilities/priceCalc';

export default class RecipeModal extends Component {
	
	constructor( props ){
		super(props);
		this.state = {printing : false};
	}
	
	render(){
		
		const {printing} = this.state;
		const {clientId, items} = this.props;
		
		return (<div className="recipe-modal">
			
			<div className="recipe-modal-title">Here's your recipe.</div>
			<div className="recipe-modal-subtitle">Client ID: {clientId}.</div>
			
			<div className="recipe-modal-body">
				<table>
					<thead>
						<tr>
							<td>Qty</td>
							<td>Description</td>
							<td>Price</td>
						</tr>
					</thead>
					<tbody>
						{_.map(items, ( item ) => item.quantity > 0 && <tr key={item.id}>
							<td>{item.quantity}</td>
							<td>{item.name}</td>
							<td>{PriceCalc.getTotalPricePerItem(item).toFixed(2)}$</td>
						</tr>)}
					</tbody>
				</table>
				<p className="recipe-modal-body-total">Total: {PriceCalc.getTotalPrice(items).toFixed(2)}$</p>
			</div>
			
			<div className="recipe-modal-cta">
				<button onClick={this.handlePrint.bind(this)} disabled={printing}>{printing ? 'printing...' : 'print'}</button>
			</div>
			
		</div>)
		
	}
	
	handlePrint(){
		this.setState({printing:true});
		setTimeout(this.props.onFinished, 1000);
	}
	
}