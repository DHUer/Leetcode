
// Definition for singly-linked list.
function ListNode(val) {
     this.val = val;
     this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return null
    let first, second, temp, newHead
    first = head
    if(head.next) second = head.next
    else return head

    newHead = second
    let pre 
    while(second != null){
        if(pre != undefined) pre.next = second 
        pre = first
        temp = second.next
        second.next = first
        first = temp
        if(temp && temp.next != null){
            second = temp.next
        }else{
            break 
        }
   }
   if(first != null) pre.next = first
   else pre.next = null
   return newHead 
};
let node1 = new ListNode(1)
let node2 = new ListNode(2)
// let node3 = new ListNode(3)
// let node4 = new ListNode(4)
node1.next = node2
// node2.next = node3
// node3.next = node4
swapPairs(node1)