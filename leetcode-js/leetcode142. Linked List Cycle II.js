/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let [fast, slow] = [head, head];
    while(fast!=null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            while(fast != head){
                head = head.next;
                fast = fast.next;
            }
            return fast;
        }
    }
    return null;
};