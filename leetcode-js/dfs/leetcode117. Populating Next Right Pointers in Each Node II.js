
// Definition for a Node.
function Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    root.next = null
    let q = []
    q.push(root)
    q.push('#')
    while(q.length && q[0] != '#') {
        let tem = q.shift()
        let left = tem.left
        let right = tem.right
        if(left != null) q.push(left)
        if(right != null) q.push(right)
        if(q.length != 0 && q[0] == '#') {
            q.shift()
            let i = 0
            while(i < q.length - 1) {
                q[i].next = q[i + 1]
                i ++
            }
            q.push('#')
        }
    }
    return root
};

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.left = node2
node1.right = node3

connect(node1)