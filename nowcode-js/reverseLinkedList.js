
function ListNode(x){
    this.val = x;
    this.next = null;
}

function reverseLinkedList(head){
    if(head.next == null || head == null){
        return false;
    }
    var newHead = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

node1 = new ListNode(12);
node2 = new ListNode(14);
node1.next = node2;

