import React, { Component } from 'react';

class Forms extends Component{

	constructor(props){
		super(props);
		this.state={
			username : '',
			allUsers : [],
			radioGroup : {
				MEANStack : false,
				MERNStack : true,
				LAMPStack : false
			},
			checkboxGroup : {
				mangoDB : true,
				react : false,
				node : true,
				express : false
			},
			slectedValue : 'Node'
		}

		this.formHanderler = this.formHanderler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.radioHandler = this.radioHandler.bind(this);
		this.checkboxHandler = this.checkboxHandler.bind(this);
		this.selectHandler = this.selectHandler.bind(this);
		
	}

	formHanderler(event){

		// console.log(event.target.value);
		this.setState({
			username:event.target.value
		})
	}

	clickHandler(event){
		let currentUser = this.state.allUsers;
		currentUser.push(this.state.username);
		this.setState({

			allUsers:currentUser,
			username : ''
		})
		console.log(this.state.allUsers);
	}
	radioHandler(event){

		console.log(event.target.value);
		let radioGroup = this.state.radioGroup;
		for(var key in radioGroup){
			radioGroup[key] = false;
		}
		radioGroup[event.target.value] = event.target.checked;
		this.setState({
			radioGroup : radioGroup
		})

	}
	checkboxHandler(event){
		console.log(event.target.value);
		let checkbox = this.state.checkboxGroup;
		checkbox[event.target.value] = event.target.checked;
		this.setState({
			checkboxGroup : checkbox
		})
	}
	selectHandler(event){
		this.setState({
			slectedValue : event.target.value
		})
	}
	render(){
		return(

			<div>
				<h1>forms</h1>
				<input type="text" name="username" value={this.state.username} onChange={this.formHanderler} />
				<button onClick={this.clickHandler}>Save User</button>
				<p>{this.state.username}</p>
				<br />
				Developers Category:
				<br />
				<label>
					Mean Stack <input type="radio" name="devcategory" value="MEANStack" checked={this.state.radioGroup['MEANStack']} onChange={this.radioHandler} />
				</label>
				<br />
				<label>
					Mern Stack <input type="radio" name="devcategory" value="MERNStack" checked={this.state.radioGroup['MERNStack']} onChange={this.radioHandler} />
				</label>
				<br />
				<label>
					Lamp Stack <input type="radio" name="devcategory" value="LAMPStack" checked={this.state.radioGroup['LAMPStack']} onChange={this.radioHandler} />
				</label>
				<br />
				Technology Category:
				<br />
				<label>
					MangoDB <input type="checkbox" name="tech" value="mangoDB" checked={this.state.checkboxGroup['mangoDB']} onChange={this.checkboxHandler} />
				</label>
				<br />
				<label>
					Express <input type="checkbox" name="tech" value="express" checked={this.state.checkboxGroup['express']} onChange={this.checkboxHandler} />
				</label>
				<br />
				<label>
					Node <input type="checkbox" name="tech" value="node" checked={this.state.checkboxGroup['node']} onChange={this.checkboxHandler} />
				</label>
				<br />
				<label>
					React <input type="checkbox" name="tech" value="react" checked={this.state.checkboxGroup['react']} onChange={this.checkboxHandler} />
				</label>
				<br />

				<select value={this.state.slectedValue} onChange={this.selectHandler}>
					<option value="Ruby">Ruby</option>
					<option value="Python">Python</option>
					<option value="Node">Node</option>
				</select>

			</div>

			);
	}
}

export default Forms;