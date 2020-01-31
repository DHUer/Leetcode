function ListNode(x){
    this.val = x;
    this.next = null;
}



function FindKthToTail(head, k)
{
    // write code here
     
    if(head == null || k <= 0) return false;;
     
    var second = head;
    var first = head;
     
    // for (var i = 1; i < k; i++) {
    //     if (second.next != null) {
    //         second = second.next;
    //     }
    //     else {
    //         return false;
    //     }
    // }
     
    while(k > 1){
        if(second.next != null){
            second = second.next;
        }
        else{
            return false;
        }
        k --;
    }
    while (second.next != null) {
        second = second.next;
        first = first.next;
    }
    return first;
}


let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

console.log(FindKthToTail(node1, 2));

