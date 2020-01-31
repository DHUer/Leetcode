/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = new Array();
    let cur = head;
    while(cur){
        stack.push(cur.val);
        cur = cur.next;
    }

    while(head){
        let temp = stack.pop();
        if(temp != head.val) return false;
        head = head.next;
    }
    return true;
};
