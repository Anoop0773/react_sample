import React, { Component } from 'react';


class Logger extends  Component{

	// Constructor run first

	constructor(props){
		super(props);
		console.log('constructor running')
	}

	//  run only once and after constructor before render
	componentWillMount(){
		console.log('component Will Mount running');
	}

	//run aftet will mount run only once after first render
	componentDidMount(){
		console.log('Component did mount');
	}

	// run before render with next propertires
	componentWillReceiveProps(nextProps){
		console.log('Component Will ReceiveProps');
		console.log('Next Props:',nextProps);
	}

	//atleast return boolean,run after will  Component and before render/update and it allow that should component upate or not
	shouldComponentUpdate(nextProps,nextState){
		console.log('should component update');
		console.log('Next Props',nextProps);
		console.log('new State',nextState);
		return true;
	}

	//it runs before updatign the component before render

	componentWillUpdate(nextProps,nextState){
		console.log('component Will Update');
		console.log('Next Props',nextProps);
		console.log('New State',nextState);
	}

	componentDidUpdate(oldProps,oldState){

		console.log('Component did  Update');
		console.log('old Props',oldProps);
		console.log('old state',oldState);
	}

	//run when component will going at the end
	componentWillUnmount(){

		console.log('component Unmount');


	}

	render(){

			console.log('render running');

			return(
					<h1>{this.props.time}</h1>
				);
	}
}

export default Logger;