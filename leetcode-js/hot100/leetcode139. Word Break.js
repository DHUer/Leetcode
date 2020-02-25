/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let [dict, mem] = [new Map(), new Map()];
    for(let i = 0; i < wordDict.length; i++){
        dict.set(wordDict[i], true)
    }
    return recursive(s);
    function recursive(s){
        if(mem.has(s)) return mem.get(s);
        if(dict.has(s)) {mem.set(s, true); return true;}
        for(let i = 1; i < s.length; i ++){
            let left = s.substring(0, i);
            let right = s.substring(i);
            if(dict.has(right) && recursive(left)){
                mem.set(s, true);
                return mem.get(s);
            }
        } 
        mem.set(s, false)
        return mem.get(s);
    }
};

console.log(wordBreak("aaaaaaa", ["aaaa","aa"]));
