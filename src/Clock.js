
import React, { Component } from 'react';
// import DitalClock from './Digitalclock';
import Logger from './Logger';

class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {
			CurrentTime: new Date().toLocaleString(),
			counter : 0
		}
		this.updateTime();
	}

	updateTime(){
		setInterval(()=>{
			this.setState({
				CurrentTime: new Date().toLocaleString(),
				counter : this.state.counter +1
			})
		},1000)
	}

	render(){
		return(
				// <h1>{this.state.CurrentTime}</h1>

				//<DitalClock time = {this.state.CurrentTime}/>
				<div>
					{
					(this.state.counter < 4)?
					(<Logger time = {this.state.CurrentTime} />):
					(<div></div>)
					}
				</div>
			
				
			);
	}
}


export default Clock;