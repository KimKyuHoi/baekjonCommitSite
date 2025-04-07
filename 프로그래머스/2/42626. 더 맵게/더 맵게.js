function solution(scoville, K) {
  const heap = [];

  // 최소 힙 삽입
  function push(val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent] <= heap[i]) break;
      [heap[i], heap[parent]] = [heap[parent], heap[i]];
      i = parent;
    }
  }

  // 최소 힙 추출
  function pop() {
    if (heap.length === 1) return heap.pop();
    const min = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      let smallest = i;

      if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
      if (right < heap.length && heap[right] < heap[smallest]) smallest = right;

      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
    return min;
  }

  // 초기 힙 구성
  scoville.forEach(push);

  let count = 0;
  while (heap.length > 1 && heap[0] < K) {
    const a = pop();
    const b = pop();
    push(a + b * 2);
    count++;
  }

  return heap[0] >= K ? count : -1;
}
