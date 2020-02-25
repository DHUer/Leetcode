/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((item1, item2) => {
        return item1[0] - item2[0];
    })
    let [start, end] = [intervals[0][0], intervals[0][1]];
    let resultList = [];
    intervals.forEach(element => {
        if(end >= element[0]){
            end = end > element[1] ? end : element[1];
        }else{
            resultList.push([start, end]);
            start = element[0];
            end = element[1];
        }
    })
    resultList.push([start, end])
    return resultList;
};

var test = [[1,3],[2,6],[8,10],[15,18]]
merge(test)