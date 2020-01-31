/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = new Object();
    let array = []
    strs.forEach(element => {
       let tempKey = element.split("").sort().join("");
       if(obj.hasOwnProperty(tempKey)){
           obj[tempKey].push(element);
       }else{
           obj[tempKey] = [];
           obj[tempKey].push(element);
       }
    });
    Object.keys(obj).forEach(element =>{
        array.push(obj[element])
    });
    console.log(array);
    return array;
}
let a = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(a)