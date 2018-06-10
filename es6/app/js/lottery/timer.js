export default class Tiemr {
    /**
     * 倒计时
     * @param   {number}     end         [结束时间：ms(单位)] 
     * @param   {function}   update      [计时更新的回调]
     * @param   {function}   handle      [计时结束的回调]
     */
    countdown (end, update, handle) {
        let now = new Date().getTime();
        let self = this;

        if( (now - end) > 0 ){
            handle.call(self)
        }else{
            let last_time = end - now;
            const px_d = 24*60*60*1000;
            const px_h = 60*60*1000;
            const px_m = 60*1000;
            const px_s = 1000;
            let d = Math.floor( last_time/px_d );
            let h = Math.floor( (last_time - d*px_d)/px_h );
            let m = Math.floor( (last_time - d*px_d - h*px_h)/px_m );
            let s = Math.floor( (last_time - d*px_d - h*px_h - m*px_m)/px_s );
            let arr = [];

            if( d > 0 ){
                arr.push(`<em>${d}</em>天`);
            }
            if( arr.length || h > 0 ){
                arr.push(`<em>${h}</em>时`);
            }
            if( arr.length || m > 0 ){
                arr.push(`<em>${m}</em>分`);
            }
            if( arr.length || s > 0 ){
                arr.push(`<em>${s}</em>秒`);
            }

            self.last_time = arr.join('');      //更新last_time  以便于计时结束时使用
            update.call(self, arr.join(''));    //更新数据

            setTimeout(()=>{
                self.countdown(end, update, handle);
            }, 1000);
        }
    }
}