function reOrderArray(array)
{
    // write code here
    var evenIndex = 0;
    // for(var i = 0; i<array.length; i++) if(array[i] % 2 ==0) {evenIndex = i; break;}
    evenIndex = array.findIndex((value) => {return value % 2 == 0});
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 != 0 && i > evenIndex){
            var temp = array[i];
            for(var j = i - 1; j >= evenIndex; j--){
                array[j+1] = array[j];
            }
            array[evenIndex] = temp;
            evenIndex = evenIndex + 1;
        }
    }
    return array;
}
var arry = [2,4,6,1,3,5,7];
reOrderArray(arry);
console.log(arry);