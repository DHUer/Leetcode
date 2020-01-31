function rectCover(number)
{
    var [first, second] = [1, 2];
    var result = 0;
    if(number == 1) return 1;
    if(number == 2) return 2;
    while(number > 2){
        result = first + second;
        first = second;
        second = result;
        number --;
    }
    return result;
}
