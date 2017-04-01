import React, {Component} from "react";
import ReactDOM from "react-dom";


import "./css/four.scss";

import one02 from './img/one2.png';
import one03 from './img/one3.png';
import one01 from './img/four01.png';
import fourT from './img/four02.png';
import fourPerson1 from './img/four03.png';
import fourPerson2 from './img/four04.png';
import fourPerson3 from './img/four05.png';
import fourText1 from './img/four06.png';
import fourText2 from './img/four07.png';
import fourText3 from './img/four08.png';
import fourText4 from './img/four09.png';

import bp1 from './img/b1.png';
import bp2 from './img/b2.png';
import pbtn from './img/btn.png';


class Four extends Component {
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
            <div className="four-box">
                <div className="one-t">
                    <p className="t-left"><img src={one02} alt=""/></p>
                    <p className="t-right"><img src={one03} alt=""/></p>
                    <p className="t-text"><img src={one01} alt=""/></p>
                </div>
                <div className="four-tab">
                    <div className="box-text"></div>
                    <p className="tab-t"><img src={fourT} alt=""/></p>
                    <div className="tab-bg">
                        <div className="fourPerson1"><img src={fourPerson1} alt=""/></div>
                        <div className="fourPerson2">
                            <img src={fourPerson2} alt=""/>
                            <div className="two_l1">
                                <span className="Sspan01"></span>
                                <span className="Sspan02"></span>
                            </div>
                        </div>
                        <div className="fourPerson3">
                            <img src={fourPerson3} alt=""/>
                            <div className="two_l2">
                                <span className="Tspan01"></span>
                                <span className="Tspan02"></span>
                            </div>
                        </div>
                        <div className="fourText1"><img src={fourText1} alt=""/></div>
                        <div className="fourText2"><img src={fourText2} alt=""/></div>
                        <div className="fourText3"><img src={fourText3} alt=""/></div>
                        <div className="fourText4"><img src={fourText4} alt=""/></div>
                    </div>

                    <div className="bb">
                        <p className="b-p1"><img src={bp1} alt=""/></p>
                        <p className="b-p2"><img src={bp2} alt=""/></p>
                    </div>
                    <div className="onOff on"></div>
                </div>
                <div className="textInput">
                    <input type="text" className="inp-text" placeholder="发布弹幕……（16字以内哦！）"/>
                    <input type="button" className="n-btn inp-btn04" defaultValue={'发布弹幕'}/>
                </div>
            </div>
        )
    }
};


export default Four;