/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let res = []
    if(s.length == 0 || words.length == 0) return res
    let n = words.length, m = words[0].length
    let m1 = {}

    for(let w of words) {
        m1[w] ? m1[w] ++ : (m1[w] = 1)
    }

    for(let i = 0; i <= s.length - n * m; i ++) {
        let m2 = {}
        let j = 0
        for(j = 0; j < n; j ++) {
            let t = s.substr(i + j * m, m)
            if(!m1[t]) break

            m2[t] ? m2[t]++ : (m2[t] = 1)
            if(m2[t] > m1[t]) break
        }
        if(j == n) res.push(i)
    }
    return res
}

var findSubstring = function(s, words) {
    let ans = []
    let n = s.length, cnt = words.length
    if(n <= 0 || cnt <= 0) return ans

    let dict = {} 
    for(let i = 0; i < cnt; i ++) {
        dict[words[i]] ? dict[words[i]] ++ : (dict[words[i]] = 1)
    }
    let wl = words[0].length
    for(let i = 0; i < wl; i ++) {
        let left = i, count = 0
        let tdict = {}
        for(let j = i; j <= n - wl; j += wl) {
            let str = s.substr(j, wl)
            if(dict[str] != undefined) {
                tdict[str] ? tdict[str] ++ : (tdict[str] = 1)
                if(tdict[str] <= dict[str]) count ++
                else {
                    while(tdict[str] > dict[str]) {
                        let str1 = s.substr(left, wl)
                        tdict[str1] --
                        if(tdict[str1] < dict[str1]) count --
                        left += wl
                    }
                }

                if(count == cnt) {
                    ans.push(left)
                    tdict[s.substr(left, wl)] --
                    count --
                    left += wl
                }
            }
            else {
                tdict = {}
                count = 0
                left = j + wl
            }
        }
    }
    return ans
}
console.log(findSubstring( "wordgoodgoodgoodbestword", ["word","good","best","word"]))