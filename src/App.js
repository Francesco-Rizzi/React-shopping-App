import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchItems, selectItem, editItem, reset} from './actions';
import ListItem from './listItem';
import ActionModal from './actionModal';
import ActionNav from './actionNav';
import RecipeModal from './recipeModal';
import _ from 'lodash';
import './App.css';

class App extends Component {
	
	constructor(props){
		super(props);
		this.state={recipeModal: false};
	}
	
	render(){
		return (
			<div className="app">
				<div className={"app-wrap" + ((this.props.editing || this.state.recipeModal) ? ' mod-editing' : '')}>
					<div className="app-header">
						<h1>ACME Market</h1>
						<h3>- select your items before checkout -</h3>
					</div>
					<div className='app-body'>
						<ul className="app-list">
							{_.map(this.props.items, e =>
								<ListItem key={e.id} item={e} onItemWillEdit={this.onItemWillEdit.bind(this, e.id)} />)}
						</ul>
					</div>
					<ActionNav items={this.props.items} onReset={this.onReset.bind(this)} onCheckout={this.onCheckout.bind(this)} />
				</div>
				<ActionModal item={this.props.items[ this.props.editing ]} closeModal={this.closeModal.bind(this)} onItemEdit={this.onItemEdit.bind(this)} />
				{this.state.recipeModal && <RecipeModal items={this.props.items} onFinished={this.onRecipeModalClose.bind(this)} />}
			</div>
		);
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
		this.setState({recipeModal:false});
	}
	
}

const mapStateToProps = state =>{
	return {
		items   : state.items,
		editing : state.editingId
	}
};

const mapDispatchToProps = dispatch =>{
	return {
		fetchItems : () =>{
			dispatch(fetchItems())
		},
		editItem   : ( name, quantity ) =>{
			dispatch(editItem(name, quantity))
		},
		selectItem : ( id ) =>{
			dispatch(selectItem(id))
		},
		reset      : () =>{
			dispatch(reset())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
