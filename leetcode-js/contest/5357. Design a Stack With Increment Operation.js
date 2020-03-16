/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize
    this.stack = new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize) {
        this.stack.push(x)
    } else {
        return
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length == 0) {
        return -1
    } else {
        return this.stack.pop()
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(k > this.stack.length) {
        for(let i = 0; i < this.stack.length; i ++) {
            this.stack[i] += val
        }
    } else {
        for(let i = 0; i < k; i ++){
            this.stack[i] += val
        }
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */