/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    if(p.length > s.length) return null;
    let map = new Map();
    for(let c of p){
        if(map.has(c)) map.set(c, map.get(c) + 1);
        else map.set(c, 1);
    }
    let counter = map.size;
    let [begin, end] = [0, 0];
    while(end < s.length){
        let c = s[end];
        if(map.has(c)){
            map.set(c, map.get(c) - 1);
            if(map.get(c) == 0) counter--;
        }
        end ++;
        while(counter == 0){
            let tempc = s[begin];
            if(map.has(tempc)){
                map.set(tempc, map.get(tempc) + 1);
                if(map.get(tempc) > 0){
                    counter ++;
                }
            }
            if(end - begin == p.length){
                result.push(begin);
            }
            begin ++;
        }
    }
    return result;
};


console.log(findAnagrams("cbaebabacd", "abc"));