import React, {Component} from "react";
import ReactDOM from "react-dom";


import "./css/three.scss";

import one02 from './img/one2.png';
import one03 from './img/one3.png';
import one01 from './img/three01.png';
import threeT from './img/three02.png';
import threePerson1 from './img/three03.png';
import threePerson2 from './img/three04.png';
import threeText1 from './img/three05.png';
import threeText2 from './img/three06.png';
import threeText3 from './img/three07.png';
import threeText4 from './img/three08.png';

import face from './img/three09.png';
import bp1 from './img/b1.png';
import bp2 from './img/b2.png';
import pbtn from './img/btn.png';


class Three extends Component {
    constructor() {
        super();
        this.state = {
            Aa: 'aaaaaaaaaaa'
        };

    }

    componentDidMount() {


    }
    render() {
        return (
            <div className="three-box">
                <div className="one-t">
                    <p className="t-left"><img src={one02} alt=""/></p>
                    <p className="t-right"><img src={one03} alt=""/></p>
                    <p className="t-text"><img src={one01} alt=""/></p>
                </div>
                <div className="three-tab">
                    <div className="box-text"></div>
                    <p className="tab-t"><img src={threeT} alt=""/></p>
                    <div className="tab-bg">
                        <div className="threePerson1"><img src={threePerson1} alt=""/></div>
                        <div className="threePerson2"><img src={threePerson2} alt=""/></div>
                        <div className="face"><img src={face} alt=""/></div>
                        <div className="threeText1"><img src={threeText1} alt=""/></div>
                        <div className="threeText2"><img src={threeText2} alt=""/></div>
                        <div className="threeText3"><img src={threeText3} alt=""/></div>
                        <div className="threeText4"><img src={threeText4} alt=""/></div>
                    </div>

                    <div className="bb">
                        <p className="b-p1"><img src={bp1} alt=""/></p>
                        <p className="b-p2"><img src={bp2} alt=""/></p>
                    </div>
                    <div className="onOff on"></div>
                </div>
                <div className="textInput">
                    <input type="text" className="inp-text" placeholder="发布弹幕……（16字以内哦！）"/>
                    <input type="button" className="n-btn inp-btn03" defaultValue={'发布弹幕'}/>
                </div>
            </div>
        )
    }
};


export default Three;