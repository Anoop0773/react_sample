import React, {Component} from 'react';
import Action from './EventAction';

class MyEvents extends Component{

		constructor(props)
		{
			super(props);
			this.state = {
				counter:0
			}
			this.increamentCounter = this.increamentCounter.bind(this);
			this.decreamentCounter = this.decreamentCounter.bind(this);
		}

		increamentCounter()
		{
			this.setState({

				counter : this.state.counter +1
			})
		}
		decreamentCounter()
		{
			if(this.state.counter > 0){
					this.setState({

					counter : this.state.counter -1
				})
			}
			
		}

	render(){
		return(
			<div>
				

				<Action plusAction={this.increamentCounter} minusAction={this.decreamentCounter} value = {this.state.counter} />
			</div>

			)
	}
}

export default MyEvents;