import React, {Component} from "react";


import "./css/six.scss";
import slogan from "./img/index-02.png";
import girl from "./img/index-04.png";
import man from "./img/index-05.png";
import water from "./img/index-07.png";
import fire from "./img/index-06.png";
import news from "./img/index-03.png";
import logo from "./img/logo.png";




class Six extends Component {
	constructor() {
		super();
		this.state = {
			Aa: 'aaaaaaaaaaa'
		};
		this.handleSixNew = this.handleSixNew.bind(this);
	}
	
	handleSixNew() {
		this.props.handleClickPop()
	}
	
	componentDidMount() {
	
	}
	
	render() {
		return (
			<div className="six-box">
				<div className="slogan">
					<img src={slogan} alt=""/>
					<span className="video"><a href="javascript:alert('敬请期待')"></a></span>
				</div>
				<div className="logo"><img src={logo} alt=""/></div>
				<div className="girl"><img src={girl} alt=""/></div>
				<div className="man"><img src={man} alt=""/></div>
				<div className="water"><img src={water} alt=""/></div>
				<div className="fire"><img src={fire} alt=""/></div>
				<div className="news" onClick={this.handleSixNew}><img src={news} alt=""/></div>
			</div>
		)
	}
}
;


export default Six;