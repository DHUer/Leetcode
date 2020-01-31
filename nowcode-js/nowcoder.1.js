
function ListNode(x){
    this.val = x;
    this.next = null;
}

function printListFromTailToHead(head)
{
    arr = [];
    while(head!=null){
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}

node1 = new ListNode(12);
node2 = new ListNode(14);
node1.next = node2;

console.log(printListFromTailToHead(node1));
