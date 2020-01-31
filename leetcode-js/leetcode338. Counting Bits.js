/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let output = new Array();
    let count = 0;
    let index = 0;
    output[count] = 0;
    count ++;
    while(count <= num){
        if(count - 2**index == 0) {
            output[count] = 1;
            index ++;
        }else{
            output[count] = 1 + output[count - 2**(index - 1)];
        }
        console.log(output, output[count]);
        count ++;
    }
};

countBits(15);