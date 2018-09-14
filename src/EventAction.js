import React, {Component} from 'react';




class Action extends Component{

	render(){
		return(

			<div>
				<button onClick = {this.props.plusAction}>click(+)</button>
				<h1>{this.props.value}</h1>
				<button onClick = {this.props.minusAction}>click(-)</button>

			</div>

		);
	}

}

export default Action;