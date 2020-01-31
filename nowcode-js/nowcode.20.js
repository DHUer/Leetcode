var topPoint = 0;
var topPointMin = 0;
var array = [];
var minArray = [];
function push(node)
{
    // write code here
    if(topPointMin == 0) {minArray[topPointMin ++] = node;}
    if(node < min() && topPointMin != 0) {minArray[topPointMin ++] = node;}
    else {minArray[topPointMin] = minArray[topPointMin - 1]; topPointMin ++;}
    array[topPoint++] = node;
}
function pop()
{
    // write code here
    if(topPoint <= 0) throw new Error();
    minArray[--topPointMin];
    return array[--topPoint];
}
function top()
{
    // write code here
    if(topPoint <= 0) throw new Error();
    return array[topPoint - 1];
}
function min()
{
    // write code here
    return minArray[topPointMin -1 ];
}

push(1);
push(2);
console.log(pop());
console.log(top())
console.log(min())
console.log(pop());