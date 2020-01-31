function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    var cur = new ListNode(0);
    var result = cur;
    if(pHead1 == null && pHead2 == null) return false; 
    while(pHead1&&pHead2){
        if(pHead1.val <= pHead2.val){
            cur.next = pHead1;
            cur = cur.next;
            pHead1 = pHead1.next;
        }
        else{
            cur.next = pHead2;
            cur = cur.next;
            pHead2 = pHead2.next;
        }
    }
    if(pHead1 == null) cur.next = pHead2;
    if(pHead2 == null) cur.next = pHead1;
    return result.next;
}

var node1 = new ListNode(1);
var node2 = new ListNode(5);

console.log(Merge(node1, node2));