import React, { Component } from 'react';


class Method extends Component{

	facebookLink(){
		return 'https://www.facebook.com'
	}
	facebookUser(){
		return 'Anoop Jaiswal'
	}

	render(){
		return(
				<div>

					<p>Hi,{this.facebookUser()},Link for facebook is here <a href={this.facebookLink()}>{this.facebookUser()}</a></p>
				</div>
			);
	}
}

export default Method;