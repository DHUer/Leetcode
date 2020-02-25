
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     let [len, countHead] = [0, head];
//     while(countHead != null){
//         len ++;
//         countHead = countHead.next;
//     }
// 
//     for(let step = 0; step < len; step ++){
//         let [left, right] = [head, head];
//         let i = 0;
//         while(i < step){
//             right = right.next;
//             i ++;
//         }
//         i = 0;
//         while(i < len){
//             if(right.next == left) return true;
//             left = left.next;
//             right = right.next;
//             i ++;
//         }
//     }
//     return false;
// };
// 
var hasCycle = function(head){
    if(head == null) return false;
    let [worker, runner] = [head, head];
    while(worker.next != null && runner.next != null){
        worker = worker.next;
        runner = runner.next.next;
        if(worker == runner) return true;
    }
    return false;
}

let node1 = new ListNode(11)
node1.next = node1;
let node2 = new ListNode(12)
let node3 = new ListNode(13)
node2.next = node3;

//console.log(hasCycle(node1))
console.log(hasCycle(node2))