import React, {Component} from 'react';
import PriceCalc from './priceCalc';
import _ from 'lodash';

export default class RecipeModal extends Component {
	
	constructor( props ){
		super(props);
		this.state = {printing : false};
	}
	
	render(){
		
		return <div className="recipe-modal">
			<div className="recipe-modal-title">Here's your recipe.</div>
			<div className="recipe-modal-subtitle">(client number: {this.props.clientId})</div>
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
						{_.map(this.props.items, ( i ) => i.quantity > 0 && <tr key={i.id}>
							<td>{i.quantity}</td>
							<td>{i.name}</td>
							<td>{PriceCalc.getTotalPricePerItem(i)}$</td>
						</tr>)}
					</tbody>
				</table>
				<p className="recipe-modal-body-total">Total: {PriceCalc.getTotalPrice(this.props.items)}$</p>
			</div>
			<div className="recipe-modal-cta">
				<button onClick={this.handlePrint.bind(this)} disabled={this.state.printing}>{this.state.printing ? 'printing...' : 'print' }</button>
			</div>
		</div>
		
	}
	
	handlePrint(){
		this.setState({printing:true});
		setTimeout(this.props.onFinished, 1000);
	}
	
}