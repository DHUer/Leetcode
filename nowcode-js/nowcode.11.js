// function NumberOf1(n)
// {
//     // write code here
//     let count = 0;
//     while(n != 0){
//         if(n % 2 == 1) count ++;
//         n = n >> 1;
//     }
//     console.log(count);
//     return count;
// }


//second solutio:
function Numberof1(n){
    var count = 0;
    var flag = 1;
    while(flag != 0){
        if((n&flag) != 0){
            count ++;
        }
        flag = flag << 1;
    }
    return count;
}
NumberOf1(0);