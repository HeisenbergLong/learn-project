class Timer{
    //end结束时间  更新数据  计时结束的回调
    countdown (end, update, handle){
        const now = new Date().getTime();
        const self = this;

        if( !(now - end) ){
            handle.call(self);
        }else{
            let last_time = end - now;
            const px_d = 24*60*60*1000;
            const px_h = 60*60*1000;
            const px_m = 60*1000;
            const px_s = 1000;

            let d = Math.floor(last_time/px_d);
            let h = Math.floor( (last_time - d*px_d)/px_h );
            let m = Math.floor( (last_time - d*px_d - h*px_h)/px_m );
            let s = Math.floor( (last_time - d*px_d -h*px_h - m*px_m)/px_s );
            let r = [];

            if(d>0){
                r.push(`<em>${d}</em>天`);
            }
            if(r.length || (h>0) ){
                r.push(`<em>${h}</em>时`);
            }
            if(r.length || (m>0) ){
                r.push(`<em>${m}</em>分`);
            }
            if(r.length || (s>0) ){
                r.push(`<em>${s}</em>秒`);
            }

            self.last_time = r.join('');
            update.call(self, r.join(''));

            setTimeout(()=>{
                self.countdown(end, update, handle);
            },1000);
        }
    }
}

export default Timer;