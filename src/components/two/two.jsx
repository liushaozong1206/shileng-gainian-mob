import React, {Component} from "react";
import ReactDOM from "react-dom";


import "./css/two.scss";

import one02 from './img/one2.png';
import one03 from './img/one3.png';
import one01 from './img/two1.png';
import twoT from './img/two2.png';

import bp1 from './img/b1.png';
import bp2 from './img/b2.png';
import twoPerson1 from './img/two3.png';
import twoPerson2 from './img/two4.png';
import twoText1 from './img/two5.png';
import twoText2 from './img/two6.png';
import twoText3 from './img/two7.png';
import twoText4 from './img/two8.png';
import twoText5 from './img/two9.png';
import twoText6 from './img/two10.png';
import twoText7 from './img/two11.png';
import hand from './img/hand.png';
import pbtn from './img/btn.png';

class Two extends Component {
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
            <div className="two-box">
                <div className="one-t">
                    <p className="t-left"><img src={one02} alt=""/></p>
                    <p className="t-right"><img src={one03} alt=""/></p>
                    <p className="t-text"><img src={one01} alt=""/></p>
                </div>
                <div className="two-tab">
                    <div className="box-text"></div>
                    <p className="tab-t"><img src={twoT} alt=""/></p>
                    <div className="tab-bg">
                        <div className="twoPerson1"><img src={twoPerson1} alt=""/></div>
                        <div className="twoPerson2">
                            <img src={twoPerson2} alt=""/>
                            <div className="hand1"><img src={hand} alt=""/></div>
                            <div className="hand2"><img src={hand} alt=""/></div>
                            <div className="hand3"><img src={hand} alt=""/></div>
                            <div className="hand4"><img src={hand} alt=""/></div>
                            <div className="hand5"><img src={hand} alt=""/></div>
                            <div className="tear_l"><p></p></div>
                            <div className="tear_r"><p></p></div>
                        </div>
                        <div className="twoText1"><img src={twoText1} alt=""/></div>
                        <div className="twoText2"><img src={twoText2} alt=""/></div>
                        <div className="twoText3"><img src={twoText3} alt=""/></div>
                        <div className="twoText4"><img src={twoText4} alt=""/></div>
                        <div className="twoText5"><img src={twoText5} alt=""/></div>
                        <div className="twoText6"><img src={twoText6} alt=""/></div>
                        <div className="twoText7"><img src={twoText7} alt=""/></div>
                    </div>

                    <div className="bb">
                        <p className="b-p1"><img src={bp1} alt=""/></p>
                        <p className="b-p2"><img src={bp2} alt=""/></p>
                    </div>
                    <div className="onOff on"></div>
                </div>
                <div className="textInput">
                    <input type="text" className="inp-text" placeholder="发布弹幕……（16字以内哦！）"/>
                    <input type="button" className="n-btn inp-btn02" defaultValue={'发布弹幕'}/>
                </div>
            </div>
        )
    }
};


export default Two;