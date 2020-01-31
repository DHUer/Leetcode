qSort = (array, low, high) => {
    if(low >= high) return
    let pivot = array[low];
    let [i, j] = [low, high];
    while(i < j){
        while(i < j && pivot <= array[j]) j --;
        array[i] = array[j];
        while(i < j && pivot >= array[i]) i ++;
        array[j] = array[i];
    }
    array[i] = pivot;
    qSort(array, low, i - 1);
    qSort(array, i + 1, high);
}
const arr = [45, 10, 11, 88, 34, 90]
qSort(arr, 0, arr.length - 1)
console.log(arr)









