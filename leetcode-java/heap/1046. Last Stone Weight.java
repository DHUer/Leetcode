package heap;

import java.util.PriorityQueue;
import java.util.Queue;

class Solution {
    Queue<Integer> q = new PriorityQueue<>((x, y) -> y - x);
    public int lastStoneWeight(int[] stones) {
        for(int stone : stones) {
            q.offer(stone);
        }
        while(q.size() > 1) {
            q.offer(q.poll() - q.poll());
        }
        return q.poll();
    }
}