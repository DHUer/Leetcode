function jumpFloor(number)
{
    // write code here
    var [first, second] = [1, 2];
    var res = 0;
    if(number == 0) return 0;
    if(number == 1) return 1;
    if(number == 2) return 2;
    while(number - 2 > 0){
        res = first + second ;
        first = second;
        second = res;
        number --;
    }
    return res;
}

jumpFloor();