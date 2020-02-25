/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
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