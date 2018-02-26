import React, {Component} from 'react';

export default class ActionModal extends Component {
	
	constructor( props ){
		super(props);
		this.state = {val: 0};
	}
	
	render(){
		
		const {item} = this.props;
		
		if ( item ) {
			
			return (<div className="action-modal">
				
				<div className="action-modal-title">Select how many <b>{item.name}</b> you want</div>
				
				<form onSubmit={this.onEdit.bind(this)}>
					
					<input className="action-modal-input" type="number" min={0} max={100} value={this.state.val} onChange={this.handleChange.bind(this)} />
					
					<div className="action-modal-cta">
						<button type='button' onClick={this.onCancel.bind(this)} className="mod-cancel">cancel</button>
						<button type='submit' >update</button>
					</div>
					
				</form>
				
			</div>);
			
		} else {
			return <div></div>;
		}
	}
	
	componentWillReceiveProps( nextProps){
		const {item} = nextProps;
		
		if(item){
			this.setState({val: item.quantity})
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
		
		const {item, onItemEdit} = this.props;
		const {val} = this.state;
		
		if ( val > -1 ) {
			onItemEdit(item.id, Math.min(val, 100));
		}
		
		this.setState({val : 0});
		this.props.closeModal();
		
	}
	
	
}