/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    let map = new Map()
    for(let i = 0; i < s.length; i ++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    if(s.length < k) {
        return false;
    }
    let countSingle = 0;
    map.forEach((value, key) => {
        if(value % 2 == 1) {
            countSingle ++;
        }
    })
    if(countSingle > k) {
        return false;
    } else {
        return true;
    }
};

console.log(canConstruct("cxayrgpcctwlfupgzirmazszgfiusitvzsnngmivctprcotcuutfxdpbrdlqukhxkrmpwqqwdxxrptaftpnilfzcmknqljgbfkzuhksxzplpoozablefndimqnffrqfwgaixsovmmilicjwhppikryerkdidupvzdmoejzczkbdpfqkgpbxcrxphhnxfazovxbvaxyxhgqxcxirjsryqxtreptusvupsstylpjniezyfokbowpbgxbtsemzsvqzkbrhkvzyogkuztgfmrprz", 5))