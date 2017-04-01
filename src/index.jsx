import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./public/public.scss";

import {proxyUrl} from "./public/public";

import One from "./components/one/one";
import Two from "./components/two/two";
import Three from "./components/three/three";
import Four from "./components/four/four";
import Six from "./components/six/six";
import mobwx from "./public/img/m2.png";
import mobsina from "./public/img/m3.png";
import mobqq from "./public/img/m4.png";
import mobbbs from "./public/img/m5.png";
import bLog from "./public/img/m6.png";
import bText from "./public/img/m7.png";
import bSpan from "./public/img/m8.png";
import bBtn from "./public/img/m9.png";
import ewm from './public/img/ewm.jpg';
import qqewm from './public/img/qq.png';

class App extends Component {
	constructor() {
		super();
		this.state = {
			news: ['最新', '新闻', '活动', '公告'],
			pop: '',
			shade: '',
			close: '',
			num: 0,
			list:[],
			ewm:'',
			qqewm:''
		};
		this.handleClickPop = this.handleClickPop.bind(this);
		this.handleClickClose = this.handleClickClose.bind(this);
		this.handleClickList = this.handleClickList.bind(this);
		this.handleClickEwm = this.handleClickEwm.bind(this);
		this.handleClickQQEwm = this.handleClickQQEwm.bind(this);
	}
	
	handleClickPop() {
		this.setState({
			pop: 'on',
			shade: 'on'
		})
	}
	handleClickClose() {
		this.setState({
			shade: '',
			pop: ''
		})
	}
	handleClickList(e) {
		let This = this;
		let index = e.target.getAttribute('data-index');
		This.setState({num:index});
		if(index ==0 || index ==1) {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: proxyUrl + '/api/website/getcolumncontent/',
				data: {app_code: 'UEFGSKHPSLJB8SU0', column_id: 407, type: 'article'},
				success: function (data) {
					This.setState({list: data.data});
				},
				error: function (err) {
				
				}
			});
		}
		if(index ==2) {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: proxyUrl + '/api/website/getcolumncontent/',
				data: {app_code: 'UEFGSKHPSLJB8SU0', column_id: 409, type: 'article'},
				success: function (data) {
					This.setState({list: data.data});
				},
				error: function (err) {
				
				}
			});
		}
		if(index ==3) {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: proxyUrl + '/api/website/getcolumncontent/',
				data: {app_code: 'UEFGSKHPSLJB8SU0', column_id: 411, type: 'article'},
				success: function (data) {
					This.setState({list: data.data});
					
				},
				error: function (err) {
				
				}
			});
		}
		
	}
	handleClickEwm(e){
		e.nativeEvent.stopImmediatePropagation();
		this.setState({
			ewm:'on',
			qqewm:''
		})
	}
	handleClickQQEwm(e){
		e.nativeEvent.stopImmediatePropagation();
		this.setState({
			qqewm:'on',
			ewm:''
		})
	}
	componentDidMount() {
		let This = this;
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: proxyUrl + '/api/website/getcolumncontent/',
			data: {app_code: 'UEFGSKHPSLJB8SU0', column_id: 407, type: 'article'},
			success: function (data) {
				This.setState({list: data.data});
			},
			error: function (err) {
			
			}
		});
		
		$('.swiper-container').css({
			height: $(window).height() - $('.mob-top').height(),
			top: $('.mob-top').height()
		});
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			direction: 'vertical',
			slidesPerView: 1,
			paginationClickable: true,
			slidesOffsetAfter: $(".top-t").height() - 1,
			onSlideChangeEnd: function (swiper, even) {
				pageIndex = swiper.activeIndex;
				if ((oneAjax && swiper.activeIndex == 1)) {
					oneAjax = false;
					pageText();
				}
				if ((twoAjax && swiper.activeIndex == 2)) {
					twoAjax = false;
					pageText();
				}
				if ((threeAjax && swiper.activeIndex == 3)) {
					threeAjax = false;
					pageText();
				}
				if ((fourAjax && swiper.activeIndex == 4)) {
					fourAjax = false;
					pageText();
				}
			}
		});
		var pageIndex = 1;
		
		function rem($pixelValue) {
			return ($pixelValue / 24);
		}
		
		var oneAjax = true;
		var twoAjax = true;
		var threeAjax = true;
		var fourAjax = true;
		//获取弹幕
		function pageText() {
			$.ajax({
				type: 'get',
				url: 'http://opm.8864.com/api/barrage/getbarragelist/',
				data: 'page=' + pageIndex + '&type=mobile',
				dataType: "jsonp",
				success: function (list) {
					if (list.code == 200) {
						$.each(list.data, function (i, ele) {
							var oP = $('.box-text').eq(pageIndex).children('p').length;
							var top = parseInt(Math.random() * rem(350) + 1) + 'rem';
							var left = parseInt(Math.random() * rem(200) + 1) + 'rem';
							$('.box-text').eq(pageIndex - 1).append('<p>' + list.data[i].content + '</p>');
							$('.box-text').eq(pageIndex - 1).children('p').eq(i).css({left: left, top: top});
						});
					}
					return false;
				},
				error: function () {
				}
			});
		}
		
		//发布弹幕
		$('.n-btn').on('click', function () {
			
			var check1 = $('.inp-text').eq(pageIndex - 1).val();
			var textVal = $.trim(check1.trim());
			if (textVal.length == 0) {
				//$('.shade').css('display', 'block');
				This.setState({shade:'on'})
				$('.text-k').css('display', 'block');
				$('.inp-text').attr('placeholder', '发布弹幕(16字以内哦！)').val('');
				return;
			} else {
				var oP = $('.box-text').eq(pageIndex - 1).children('p').length;
				var top = parseInt(Math.random() * rem(350) + 1) + 'rem';
				var left = parseInt(Math.random() * rem(200) + 1) + 'rem';
				
				$('.box-text').eq(pageIndex - 1).append('<p>' + textVal + '</p>');
				$('.box-text').eq(pageIndex - 1).children('p').eq(oP).css({left: left, top: top});
				
				
				$.ajax({
					type: 'get',
					url: 'http://opm.8864.com/api/barrage/insertbarrage/',
					data: 'page=' + (pageIndex) + '&type=mobile&content=' + textVal,
					dataType: "jsonp",
					success: function (data) {
						$('.inp-text').attr('placeholder', '发布弹幕(16字以内哦！)').val('');
						return false;
					},
					error: function () {
					}
				});
				//倒计时
				function timeFn(aClass, textNum, timer, xClass) {
					if (aClass.hasClass(xClass)) {
						aClass.val(textNum + 's后再提交').attr('disabled', true);
						timer = setInterval(function () {
							textNum--;
							aClass.val(textNum + 's后再发布');
							if (textNum == 0) {
								clearInterval(timer);
								aClass.attr('disabled', false).val('发布弹幕');
								textNum = 60
							}
						}, 1000);
					}
				};
				var textNum1 = 60,
					textNum2 = 60,
					textNum3 = 60,
					textNum4 = 60,
					timer1,
					timer2,
					timer3,
					timer4;
				
				if (pageIndex == 1) {
					timeFn($('.inp-btn01'), textNum1, timer1, 'inp-btn01');
				}
				if (pageIndex == 2) {
					timeFn($('.inp-btn02'), textNum2, timer2, 'inp-btn02');
				}
				if (pageIndex == 3) {
					timeFn($('.inp-btn03'), textNum3, timer3, 'inp-btn03');
				}
				if (pageIndex == 4) {
					timeFn($('.inp-btn04'), textNum4, timer4, 'inp-btn04');
				}
				
			}
		});
		
		
		$('.inp-text').keyup(function () {
			inpText($('.inp-text'))
		})
		
		//text输入字数判断
		function inpText(obj) {
			var val = $(obj).val().length;
			if (val > 0) {
				$(obj).val($(obj).val().substring(0, 16));
			}
		}
		
		//关闭弹幕
		$('#root .onOff').on('touchstart', function () {
			if ($(this).hasClass('on')) {
				$('#root .onOff').removeClass('on');
				$('#root .box-text').css('display', 'none');
				$('.textInput').css('display', 'none');
			} else {
				$('#root .onOff').addClass('on');
				$('#root .box-text').css('display', 'block');
				$('.textInput').css('display', 'block');
			}
		})
		
		//手机号验证
		function vailPhone() {
			var phone = $(".b-text input").val();
			var flag = false;
			var message = "";
			var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
			if (phone == '') {
				message = "手机号码不能为空！";
			} else if (phone.length != 11) {
				message = "请输入有效的手机号码！";
			} else if (!myreg.test(phone)) {
				message = "请输入有效的手机号码！";
			} else {
				flag = true;
			}
			if (!flag) {
				//提示错误效果
				var onOff = true;
				$('.text-phone').css('display', 'block');
				//$('.shade').css('display', 'block');
				This.setState({shade:'on'})
				
			} else {
				$.ajax({
					type: 'get',
					url: 'http://opm.8864.com/api/barrage/inserttel',
					data: 'tel=' + phone,
					dataType: "jsonp",
					success: function (data) {
						if (data.code == 100) {
							//$('.shade').css('display', 'block');
							This.setState({shade:'on'})
							$('.text-repeat').css('display', 'block');
						} else {
							//提示正确效果
							//$('.shade').css('display', 'block');
							This.setState({shade:'on'})
							$('.success').css('display', 'block');
						}
						$(".b-text input").attr('placeholder', '请输入手机号').val('');
						return false;
					},
					error: function () {
					}
				});
				
			}
			return flag;
		}
		
		$('.b-btn').on('touchstart', function () {
			vailPhone();
		});
		
		$('.success p,.text-k p,.text-phone p,.text-repeat p').on('touchstart', function () {
			//$('.shade').css('display', 'none');
			This.setState({shade:''})
			$('.success').css('display', 'none');
			$('.text-k').css('display', 'none');
			$('.text-phone').css('display', 'none');
			$('.text-repeat').css('display', 'none');
		});
		//影藏二维码
		$(document).on('click',function(event){
			event.stopPropagation();
			This.setState({
				ewm:'',
				qqewm:''
			})
		})
		
	}
	
	render() {
		let This = this;
		return (
			<div className="mob-index">
				<div className={"shade" + ' ' + this.state.shade}></div>
				<div className={"pop-tab" + ' ' + this.state.pop}>
					<div className="pop-close" onClick={this.handleClickClose}></div>
					<ul>
						{
							This.state.news.map(function (item, index) {
								return (
									<li key={index} data-index={index} className={This.state.num == index ? 'active' : ''}
									    onClick={This.handleClickList}>{item}</li>
								)
							})
						}
					</ul>
					<div className="more"><a href=""> + 更多</a></div>
					<div className="pop-cont">
						{
							This.state.list.map(function(item,index) {
								let time = item.create_time;
								let newTime = time.split(' ')[0].split('-');
								let arrTime = newTime[1]+'/'+newTime[2];
								return (
									<p key={index}><a href={item.url} target="_bank">[{This.state.news[This.state.num]}]{item.title}</a><span>[{arrTime}]</span></p>
								)
							})
						}
						
						
						
					</div>
				</div>
				<div className="success">
					<p></p>
				</div>
				<div className="text-k">
					<p></p>
				</div>
				<div className="text-phone">
					<p></p>
				</div>
				<div className="text-repeat">
					<p></p>
				</div>
				<div className="mob-top">
					<div className="top-b">
						<div className="b-logo"><img src={bLog} alt=""/></div>
						<div className="b-text">
							<p><img src={bText} alt=""/></p>
							<input type="number" placeholder="请输入手机号" defaultValue={''}/>
						</div>
						<div className="b-btn">
							<span><img src={bSpan} alt=""/></span>
							<p><img src={bBtn} alt=""/></p>
						</div>
					</div>
				</div>
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide slide1"><Six handleClickPop={this.handleClickPop}/></div>
						<div className="swiper-slide slide2"><One/></div>
						<div className="swiper-slide slide3"><Two/></div>
						<div className="swiper-slide slide4"><Three/></div>
						<div className="swiper-slide slide5"><Four/></div>
						<div className="top-t">
							<div className="mob-share">
								<p className={"wx-ewm"+' '+this.state.ewm}><img src={ewm} alt=""/></p>
								<p className={"qq-ewm"+' '+this.state.qqewm}><img src={qqewm} alt=""/></p>
								<p className="wx" onClick={this.handleClickEwm}><img src={mobwx} alt=""/></p>
								<p className="sina"><a href="http://weibo.com/6154345008/profile?topnav=1&wvr=6"> <img src={mobsina} alt=""/></a></p>
								<p className="qq" onClick={this.handleClickQQEwm}><img src={mobqq} alt=""/></p>
								<p className="bbs"><a href="http://bbs.8864.com/forum-342-1.html"><img src={mobbbs} alt=""/></a></p>
							</div>
							<div className="mog-bottom"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
;

ReactDOM.render(<App/>, document.getElementById('root'));