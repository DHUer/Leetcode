package array;

import java.util.Stack;

class MinStack {

    Stack<Integer> main;
    Stack<Integer> min;
    /** initialize your data structure here. */
    public MinStack() {
        main = new Stack<Integer>();
        min = new Stack<Integer>();
    }
    
    public void push(int x) {
        main.push(x);
        if(!min.isEmpty() && x > min.peek()) {
            min.push(min.peek());
        } else {
            min.push(x);
        }
    }
    
    public void pop() {
        min.pop();
        main.pop();
    }
    
    public int top() {
        return main.peek();
    }
    
    public int getMin() {
        return min.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */