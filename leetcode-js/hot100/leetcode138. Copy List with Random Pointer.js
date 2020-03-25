
// Definition for a Node.
function Node(val,next,random) {
   this.val = val;
   this.next = next;
   this.random = random;
};
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return [];
    let [res, cur] = [head, head];
    let node = new Node(cur.val, null, null);
    let unorderMap = new Map();
    res = node;
    unorderMap.set(cur, node);
    cur = cur.next;
    while(cur!=null){
        let temp = new Node(cur.val, null, null);
        node.next = temp;
        unorderMap.set(cur, temp);
        cur = cur.next;
        node = node.next;
    }
    node = res;
    cur = head;
    while(cur!=null){
        node.random = unorderMap.get(cur.random);
        node = node.next;
        cur = cur.next;
    }
    return res;
};

var copyRandomList = function(head) {
    let map = new Map();
    let newHead = head;
    while(newHead != null) {
        map.set(newHead, new Node(newHead.val));
        newHead = newHead.next;
    }
    
    newHead = head
    while(newHead != null) {
        map.get(newHead).next = map.get(newHead.next) || null
        map.get(newHead).random = map.get(newHead.random) || null
        newHead = newHead.next
    }

    
    return map.get(head);
    
};

let node1 = new Node(7)
let node2 = new Node(13)
let node3 = new Node(11)

node1.next = node2
node1.random = null 

node2.next = node3
node2.random = node1

node3.random = node2

copyRandomList(node1)