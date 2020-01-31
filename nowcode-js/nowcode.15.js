function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    if(pHead.next == null || pHead) return pHead;
    var Head = ReverseList(pHead.next);
    pHead.next.next = pHead;
    pHead.next = null;
    return Head;
}

var head1 =new ListNode(1);
var head2 =new ListNode(2);
// var head3 =new ListNode(3);
// var head4 = new ListNode(4);

// head1.next = head2;
// head2.next = head3;
// head3.next = head4;

console.log(ReverseList(head1));
