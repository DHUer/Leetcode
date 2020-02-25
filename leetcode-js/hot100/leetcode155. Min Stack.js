
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = new Array();
    this.array = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let len = this.min.length;
    if(len == 0 ) this.min.push(x);
    if(len > 0 && this.min[len - 1] > x){
        this.min.push(x);
    }else if(len > 0){
        this.min.push(this.min[len - 1]);
    }
    this.array.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.array.length;
    if(!this.array.length) return null;
    return this.array[len -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let len = this.min.length;
    if(!this.min.length) return null;
    else return this.min[len - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 let minStack = new MinStack();
 minStack.push(-2);
 minStack.push(-3);
 minStack.push(-1);
 minStack.push(-1);

console.log(minStack.getMin());

