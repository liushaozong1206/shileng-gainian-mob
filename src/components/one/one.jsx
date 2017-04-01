import React, {Component} from "react";
import ReactDOM from "react-dom";


import "./css/one.scss";

import one02 from './img/one2.png';
import one03 from './img/one3.png';
import one01 from './img/one1.png';
import tabT from './img/one4.png';
import people01 from './img/one6.png';
import people02 from './img/one7.png';
import people03 from './img/one5.png';
import ptext1 from './img/one06.png';
import ptext2 from './img/one07.png';
import ptext3 from './img/one05.png';
import bp1 from './img/b1.png';
import bp2 from './img/b2.png';
import pbtn from './img/btn.png';

class One extends Component {
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
            <div className="one-box">
                <div className="one-t">
                    <p className="t-left"><img src={one02} alt=""/></p>
                    <p className="t-right"><img src={one03} alt=""/></p>
                    <p className="t-text"><img src={one01} alt=""/></p>
                </div>
                <div className="one-tab">
                    <div className="box-text"></div>
                    <p className="tab-t"><img src={tabT} alt=""/></p>
                    <div className="tab-bg">
                        <div className="people-01"><img src={people01} alt=""/></div>
                        <div className="people-02"><img src={people02} alt=""/></div>
                        <div className="people-03"><img src={people03} alt=""/></div>
                        <div className="p-text1"><img src={ptext1} alt=""/></div>
                        <div className="p-text2"><img src={ptext2} alt=""/></div>
                        <div className="p-text3"><img src={ptext3} alt=""/></div>
                    </div>

                    <div className="bb">
                        <p className="b-p1"><img src={bp1} alt=""/></p>
                        <p className="b-p2"><img src={bp2} alt=""/></p>
                    </div>
                    <div className="onOff on"></div>
                </div>
                <div className="textInput">
                    <input type="text" className="inp-text" placeholder="发布弹幕……（16字以内哦！）"/>
                    <input type="button" className="n-btn inp-btn01" defaultValue={'发布弹幕'}/>
                </div>
            </div>
        )
    }
};


export default One;