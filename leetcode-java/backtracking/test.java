package backtracking;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class test {
        public String getHappyString(int n, int k) {
            Queue<String> queue = new LinkedList<>();
            char [] happy = new char[]{'a', 'b', 'c'};
            queue.offer("a");
            queue.offer("b");
            queue.offer("c");
            if(n == 1) return "" + happy[k - 1];
            for(int i = 2; i <= n; i ++) {
                int len = queue.size();
                int count = 1;
                for(int j = 0; j < len; j ++) {
                    String ele = queue.poll();
                    for(int m = 0; m < 3; m ++) {
                        String tmp = ele;
                        if(ele.charAt(ele.length() - 1) != happy[m]) {
                            tmp = tmp + happy[m];
                            queue.offer(tmp);
                            if (i == n && count == k) {
                                return tmp;
                            }
                            count++;
                        }
                    }
                }
                
            }
            return "";
        }
    public static void main(String[] args) {
        test s = new test();
        s.getHappyString(1, 3);
    }
}