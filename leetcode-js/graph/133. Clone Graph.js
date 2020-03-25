/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, G = new Map()) {
    if(!node) return node 
    if(G.has(node.val)) {
        return G.get(node.val)
    }  

    G.set(node.val, new Node(node.val, []))
    for(ne of node.neigbhors) {
        const clone = cloneGraph(ne, G)
        G.get(ne.val).neigbhors.push(clone)
    }

    return G.get(node.val)
};