class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break; // 작업시간 비교
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  _bubbleDown() {
    let i = 0;
    const length = this.heap.length;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

    



function solution(jobs) {
  const heap = new MinHeap();
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시간 기준 정렬

  let time = 0;     // 현재 시간
  let i = 0;        // jobs 인덱스
  let total = 0;    // 총 소요 시간
  const n = jobs.length;

  while (i < n || heap.size() > 0) {
    // 현재 시점까지 요청된 작업을 힙에 넣기
    while (i < n && jobs[i][0] <= time) {
      const [start, duration] = jobs[i];
      heap.push([duration, start]); // 작업시간 기준으로 넣기
      i++;
    }

    if (heap.size() > 0) {
      const [duration, start] = heap.pop();
      time += duration;
      total += time - start;
    } else {
      // 대기 중인 작업이 없으면 다음 작업 시간으로 점프
      time = jobs[i][0];
    }
  }

  return Math.floor(total / n);
}
