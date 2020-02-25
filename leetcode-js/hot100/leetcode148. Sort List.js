
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {listnode} head
 * @return {listnode}
 */
var sortList = function(head) {
    if(head == null || head.next == null) return head;
    
    let [pre, slow, fast] = [null, head, head];
    while(fast != null && fast.next != null){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    pre.next = null;

    let left = sortList(head);
    let right = sortList(slow)

    return merge(left, right);
};


function merge(left, right){
    let p = new ListNode(0);
    let l = p;
    while(left && right){
        if(left.val <= right.val){
            p.next = left;
            left = left.next;
            p = p.next;
        }else{
            p.next = right;
            right = right.next;
            p = p.next;
        }
    }
    if(left){
        p.next = left;
    }
    if(right){
        p.next = right;
    }
    return l.next;
}

let l1 = new ListNode(1);
let l2 = new ListNode(13);
let l3 = new ListNode(2);
l1.next = l2;
l2.next = l3;

console.log(sortList(l1));
