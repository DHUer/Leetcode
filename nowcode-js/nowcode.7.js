function Fibonacci(n)
{
    // write code here
    var res = 0;
    var [first, second] = [1, 1];
    if(n == 0) return 0;
    if(n == 1) return first;
    if(n == 2) return second;
    while(n-2 > 0){
        res = first + second;
        first = second;
        second = res;
        n --;
    }
    return res;
}

Fibonacci(1001);