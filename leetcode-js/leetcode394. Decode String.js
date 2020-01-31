/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let [stackNum, stackAplha] = [[], []];
    for(let i = 0; i < s.length; i ++){
        if(s[i] >= '0' && s[i] <= '9'){
            let temp = [];
            temp.push(s[i]);
            while(i + 1 < s.length&& s[i + 1] >= '0' && s[i + 1] <= '9'){
                temp.push(s[ ++ i]);
            }
            temp = Number(temp.join(''));
            stackNum.push(temp);
        }else if(s[i] != ']') {
            stackAplha.push(s[i]);
        }else{
            let [times, ele] = [stackNum.pop(), stackAplha.pop()];
            let temp = [];
            while(ele != '['){
                temp.push(ele);
                ele = stackAplha.pop();
            }
            temp = temp.join('').repeat(times);
            let i = temp.length - 1;
            while(i >= 0) {
                stackAplha.push(temp[i --]);
            }
        }
    }
    return stackAplha.join('');
};

console.log(decodeString('[]'));