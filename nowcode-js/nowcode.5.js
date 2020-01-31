function minNumberInRotateArray(rotateArray)
{
    // write code 
    if(rotateArray.length == 0){
        return 0;
    }
    var low = 0, high = rotateArray.length - 1;
    var mid;
    while(low < high){
        mid =parseInt((low + high) /2);
        if(rotateArray[mid] >= rotateArray[low] && rotateArray[mid] >= rotateArray[high]){
            low = mid + 1;
        } else{
            high = mid;
        }
    }
    return rotateArray[low];
}

var arry = [4,5,1,2,3];

console.log(minNumberInRotateArray(arry));