package string;
import java.util.Deque;
import java.util.LinkedList;

/*
 * Filename: /Users/wling/Code/leetcode-java/string/71. Simplify Path.java
 * Path: /Users/wling/Code/leetcode-java/string
 * Created Date: Monday, March 23rd 2020, 7:39:56 pm
 * Author: wling
 * 
 */

class Solution {
    public String simplifyPath(String path) {
        Deque<String> stack = new LinkedList<>();
        for(String item : path.split("/")){
            if(item.equals("..")) {
                if(!stack.isEmpty()) {
                    stack.pop();
                }
            } else if(!item.isEmpty() && !item.equals(".")) {
                stack.push(item);
            }
        }
        String res = "";
        for(String d : stack) res = "/" + d + res;
        return res.isEmpty() ? "/" : res;
    }
}