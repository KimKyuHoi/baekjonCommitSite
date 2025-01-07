function solution(n, wires) {
    
    const graph = Array.from({length: n + 1}, () => []);
    for(const [v1, v2] of wires){
        graph[v1].push(v2)
        graph[v2].push(v1)
        // console.log(`graph[${v1}]: `, graph[v1])
        // console.log(`graph[${v2}]: `, graph[v2])
    }
    
    // console.log(graph)
    

  function countNodes(start, cutA, cutB) {
    const visited = Array(n + 1).fill(false);
    visited[start] = true;
    let count = 1;
    const queue = [start];

    while (queue.length) {
      const current = queue.shift();
      for (const next of graph[current]) {
        if (
          (current === cutA && next === cutB) ||
          (current === cutB && next === cutA)
        ) continue;
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }
    return count;
  }

  let answer = Infinity;

  for (const [v1, v2] of wires) {
    const size = countNodes(v1, v1, v2);
    const diff = Math.abs(size - (n - size));
    answer = Math.min(answer, diff);
  }

  return answer;
}
