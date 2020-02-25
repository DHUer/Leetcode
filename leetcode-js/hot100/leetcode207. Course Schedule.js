/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let visited = new Set();
    let visiting = new Set();
    let graph = new Map(); 

    for([v, e] of prerequisites){
        if(graph.has(v)){
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v, edges);
        }else{
            graph.set(v, [e]);
        }
    }

    for(const [v, e] of graph){
        if(DFS(v)) return false;
    }

    return true;
    
    function DFS(v){
        visiting.add(v);
        let edges = graph.get(v);
        if(edges){
            for(let e of edges){
                if(visited.has(e)) continue;
                if(visiting.has(e)) return true;
                if(DFS(e)) return true;
            }
        }
        visiting.delete(v);
        visited.add(v);
        return false;
    }

};