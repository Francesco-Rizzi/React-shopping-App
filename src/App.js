import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchItems, selectItem, editItem, reset, updateClientId} from './actions/actions';

import ListItem from './components/listItem';
import ActionModal from './components/actionModal';
import ActionNav from './components/actionNav';
import RecipeModal from './components/recipeModal';
import _ from 'lodash';

class App extends Component {
	
	constructor( props ){
		super(props);
		this.state = {recipeModal : false};
	}
	
	render(){
		
		const {items, editing, clientId} = this.props;
		const {recipeModal} = this.state;
		
		return (<div className="app">
			
			<div className={"app-wrap" + ((editing || recipeModal) ? ' mod-editing' : '')}>
				
				<div className="app-header">
					<h1>React ACME Market 🛒</h1>
					<h2>&bull; select your items before checkout &bull;</h2>
					<h3>&bull; now serving number: {clientId} &bull;</h3>
				</div>
				
				<div className='app-body'>
					<ul className="app-list">
						{_.map(items, e => <ListItem key={e.id} item={e} onItemWillEdit={this.onItemWillEdit.bind(this, e.id)} />)}
					</ul>
				</div>
				
				<ActionNav items={items} onReset={this.onReset.bind(this)} onCheckout={this.onCheckout.bind(this)} />
				
			</div>
			
			<ActionModal item={items[ editing ]} closeModal={this.closeModal.bind(this)} onItemEdit={this.onItemEdit.bind(this)} />
			{recipeModal && <RecipeModal items={items} clientId={clientId} onFinished={this.onRecipeModalClose.bind(this)} />}
			
		</div>);
		
	}
	
	componentWillMount(){
		this.props.fetchItems();
	}
	
	closeModal(){
		this.props.selectItem(false);
	}
	
	onItemEdit( name, q ){
		this.props.editItem(name, q);
	}
	
	onCheckout(){
		this.setState({recipeModal : true});
	}
	
	onItemWillEdit( id ){
		this.props.selectItem(id);
	}
	
	onReset(){
		this.props.reset();
	}
	
	onRecipeModalClose(){
		this.props.reset();
		this.props.updateClientId();
		this.setState({recipeModal : false});
	}
	
}

const mapStateToProps = state =>{
	return {
		items    : state.items,
		editing  : state.editingId,
		clientId : state.clientId
	}
};

const mapDispatchToProps = dispatch =>{
	return {
		fetchItems     : () =>{
			dispatch(fetchItems())
		},
		editItem       : ( name, quantity ) =>{
			dispatch(editItem(name, quantity))
		},
		selectItem     : ( id ) =>{
			dispatch(selectItem(id))
		},
		reset          : () =>{
			dispatch(reset())
		},
		updateClientId : () =>{
			dispatch(updateClientId())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
