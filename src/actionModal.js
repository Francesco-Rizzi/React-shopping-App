import React, {Component} from 'react';

export default class ActionModal extends Component {
	
	constructor( props ){
		super(props);
		let quantity = (this.props.item && this.props.item.quantity) || 0;
		this.state   = {val : quantity};
	}
	
	render(){
		
		const item = this.props.item;
		
		if ( item ) {
			return <div className="action-modal">
				<div className="action-modal-title">Select how many <b>{item.name}</b> you want</div>
				<input className="action-modal-input" type="number" min={0} max={100} value={this.state.quantity} onChange={this.handleChange.bind(this)} />
				<div className="action-modal-cta">
					<button onClick={this.onCancel.bind(this)} className="mod-cancel">cancel</button>
					<button onClick={this.onEdit.bind(this)}>update</button>
				</div>
			</div>
		} else {
			return <div></div>;
		}
	}
	
	handleChange( e ){
		let val = +e.target.value;
		this.setState({val});
	}
	
	onCancel(){
		this.setState({val : 0});
		this.props.closeModal();
	}
	
	onEdit(){
		const item = this.props.item;
		
		if ( this.state.val > -1 ) {
			this.props.onItemEdit(item.id, (this.state.val > 100 ? 100 : this.state.val))
		}
		this.setState({val : 0});
		this.props.closeModal();
	}
	
	
}