import $ from 'jquery';
import { rejects } from 'assert';

export default class Interface {
    /**
     * 获取‘遗漏’接口
     * @param   {string} issue    [期数]
     * @return  {promise} 
     */
    getOmit (issue) {
        let self = this;

        return new Promise((resolve, reject)=>{
            $.ajax({
                url: '/get/omit',
                type: 'get',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res){
                    self.setOmit(res.data);
                    resolve.call(self, res);
                },
                error: function(err){
                    reject.call(err);
                }
            })
        });
    }

    /**
     * 获取开奖号码
     * @param   {string} issue [期号]
     * @return  {promise}
     */
    getOpenCode (issue) {
        let self = this;

        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                type: 'get',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res){
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: function(err){
                    reject.call(err);
                }
            })
        })
    }

    getState (issue){
        let self = this;

        return new Promise((resolve, reject)=>{
            $.ajax({
                url: '/get/state',
                type: 'get',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res){
                    resolve.call(self, res);
                },
                error: function(err){
                    reject.call(err);
                }
            })
        })
    }
}