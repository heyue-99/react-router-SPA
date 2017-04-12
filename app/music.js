import React from "react";
//import css from './style.css';
require('./style.css')

var url = require("file-loader!./music.mp3");

/*var Music = React.createClass({
	 getInitialState: function() {
		return{
			isPlay : false
		};
	},

	 play: function(){
  	 	this.setState({
       		isPlay : true
  		})
 	 },

 	 pause: function(){
  		this.setState({
       		isPlay : false
  		})
 	 },

	componentDidMount: function(){
		var audio = this.refs.audio;
		audio.addEventListener('play',this.play);
		audio.addEventListener('pause',this.pause);
	},

	render: function(){
		var record = this.state.isPlay ? 'play img' :'img';
		return(
			<div className="container">
			<div className="box2">
				<div className={record}></div>
				<div className="music">
					<audio ref="audio" controls="controls" loop="loop" src={url}>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
			</div>
		);
	}
})

module.exports = Music;*/

export default class Music extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isPlay : false
		};
	}

	play(event){
		this.setState({
       		isPlay : true
  		});
	}

	pause(event){
		this.setState({
       		isPlay : false
  		});
	}

	componentDidMount(){
		var audio = this.refs.audio;
		audio.addEventListener('play',this.play.bind(this));
		audio.addEventListener('pause',this.pause.bind(this));
	}

	render(){
		var record = this.state.isPlay ? 'play img' :'img';
		return(
			<div className="container">
			<div className="box2">
				<div className={record}></div>
				<div className="music">
					<audio ref="audio" controls="controls" loop="loop" src={url}>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
			</div>
		);
	}
}
