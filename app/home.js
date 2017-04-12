import React from 'react';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			opacity: 0.5
		};
	}

	componentDidMount(){
		var timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity = opacity-0.05;
			if(opacity<0.1){
				this.setState({opacity: 1});
			}else{
				this.setState({opacity: opacity});
			}
		}.bind(this),300)
	}

	render(){
		return <div className="container">
				<h1 style={{ opacity:this.state.opacity }}>Welcome</h1>
			   </div>
	}
}