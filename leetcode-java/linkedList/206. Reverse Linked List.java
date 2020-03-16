package linkedList;
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null ) return head;
        ListNode tail = reverseList(head.next);
        
        head.next.next = head;
        head.next = null;

        return tail;
    }
    public ListNode reverseList(ListNode head, int start) {
        ListNode cur = head;
        ListNode pre = null;
        while(cur != null) {
            ListNode temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }

        return pre;
    }

}

