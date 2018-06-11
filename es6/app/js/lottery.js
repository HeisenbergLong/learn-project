// 模块的整合
import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

/**
 * [对象的深拷贝]
 * @param {object} target  [目标对象]
 * @param {object} source  [源对象]
 */
const copyProperties = function(target, source){
    for(let key of Reflect.ownKeys(source)){    //拿到源对象上的所有属性
        if(key !== 'name' && key !== 'prototype' && key !== 'constructor'){  //过滤
            let desc = Object.getOwnPropertyDescriptor(source, key);        //获取指定对象的自身属性描述符
            Object.defineProperty(target, key, desc);    //设置属性和属性描述符
        }
    }
}

/**
 * [一个类继承多个类]
 * @param {array} mixins  [继承对象的数组] 
 */
const mix = function (...mixins){
    class Mix{}
    for(let mix of mixins){
        copyProperties(Mix, mix);    //拷贝对象
        copyProperties(Mix.prototype, mix.prototype);  //拷贝原型
    }

    return Mix;
}

export default class Lottery extends mix(Base, Timer, Calculate, Interface){
    constructor(name='syy', cname='11选5', issue='**', state='**'){
        super();
        this.name=name;
        this.cname=cname;
        this.issue=issue;
        this.state=state;
        this.el='';
        this.omit=new Map();
        this.open_code=new Set();  //开奖号码
        this.open_code_list=new Set(); //开奖记录
        this.play_list=new Map();
        this.number=new Set();  //奖号
        this.issue_el='#curr_issue';
        this.countdown_el='#countdown'; //倒计时的选择器
        this.state_el='.state_el'; //状态的选择器
        this.cart_el='.codelist'; //购物车的选择器
        this.omit_el=''; //遗漏
        this.cur_play='r5'; //当前的默认玩法
        this.initPlayList();
        this.initNumber();
        this.updateState(); //更新状态
        this.initEvent();
    }

    updateState () {
        let self = this;
        this.getState().then(function(res){
            self.issue=res.issue; //拿到期号
            self.end_time=res.end_time; //拿到截止时间
            self.state=res.state; //拿到状态
            $(self.issue_el).text(res.issue); //更新期号
            self.countdown(res.end_time, function(time){//每次倒计时更新
                $(self.countdown_el).html(time)
            },function(){//计时结束 重新获取数据
                setTimeout(function(){
                    self.updateState();
                    self.getOmit(self.issue).then(function(res){

                    })
                    self.getOpenCode(self.issue).then(function(res){

                    })
                }, 500);
            })
        })
    }

    initEvent () {
        let self=this;
        $('#plays').on('click','li',self.changePlayNav.bind(self));
        $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
        $('#confirm_sel_code').on('click',self.addCode.bind(self));
        $('.dxjo').on('click','li',self.assistHandle.bind(self));
        $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
    }
}