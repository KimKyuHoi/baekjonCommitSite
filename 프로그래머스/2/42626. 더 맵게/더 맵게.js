class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;

    while (true) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }

    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}



function solution(scoville, K) {
  const heap = new MinHeap();

  scoville.forEach(s => heap.push(s));

  let count = 0;

  while (heap.size() > 1 && heap.peek() < K) {
    const a = heap.pop();
    const b = heap.pop();
    heap.push(a + b * 2);
    count++;
  }

  return heap.peek() >= K ? count : -1;
}
