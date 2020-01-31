function jumpFloorII(number)
{
    // write code here
    if(number == 1) return 1;
    if(number == 2) return 2;
    var [first, pre] = [1, 2];
    while(number - 2 > 0){
        number --;
        res = first + pre + 1;
        first = first + pre;
        pre = res;
    }
    console.log(res);
    return res;
}
//  还有更好的方法：因为每个台阶除了最后一个台阶都是可有可无的，所以应该是2**(n-1)

jumpFloorII(4);