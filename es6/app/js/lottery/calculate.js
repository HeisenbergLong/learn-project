class Calculate {
    /**
     * [computeCount  计算注数]
     * @param  {number} active        [当前选中号码的数量]
     * @param  {string} play_name     [当前玩法标识]
     * @return {number}               [注数]
     */
    computeCount(active, play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr =new Array(active).fill('0');
        if(exist && play_name.at(0) === 'r'){
            count = Calculate.combine(arr, play_name.split('')[1]);
        }
        return count;
    }

    /**
     * [combine   组合运算]
     * @param  {array}  arr      [参与组合运算的数组]
     * @param  {number} size     [组合运算的基数]
     * @return {number}          [计算注数]
     */
    static combine(arr, size){
        
    }
}

export default Calculate;