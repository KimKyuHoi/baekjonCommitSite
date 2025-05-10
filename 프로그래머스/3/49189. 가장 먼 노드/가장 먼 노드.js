function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);
    
    for(let i = 0; i<edge.length; i++){
        const [a, b] = edge[i];
        
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const queue = [1];
    visited[1] = true;
    
    while(queue.length > 0){
        const current = queue.shift();
        
        for(const next of graph[current]){
            if(!visited[next]){
                visited[next] = true;
                distance[next] = distance[current] + 1; 
                queue.push(next)
            }
        }
        
    }
    
    const max = Math.max(...distance)
    
    return distance.filter(d => d === max).length;
}