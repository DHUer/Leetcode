/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if(a[0] == b[0]) return a[1] - b[1];
        else return b[0] - a[0];
    })
    let res = [];
    for(let i = 0; i < people.length; i ++){
        res.splice(people[i][1], 0, people[i]);
    }

    return res;
};

console.log(reconstructQueue([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]));