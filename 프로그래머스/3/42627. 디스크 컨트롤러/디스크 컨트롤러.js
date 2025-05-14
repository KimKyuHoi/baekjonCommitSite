function solution(jobs) {
    jobs.sort((a,b) => a[0] - b[0])
    let time = 0;
  let total = 0;
  let i = 0;
  let count = 0;
  const waiting = [];

  while (count < jobs.length) {
    // 현재 시간에 들어온 작업 추가
    while (i < jobs.length && jobs[i][0] <= time) {
      waiting.push(jobs[i++]);
    }

    // 처리 가능한 작업이 있다면
    if (waiting.length > 0) {
      // 소요 시간 기준으로 정렬
      waiting.sort((a, b) => a[1] - b[1]);

      const [start, duration] = waiting.shift();
      time += duration;
      total += time - start;
      count++;
    } else {
      // 다음 작업 시간까지 건너뜀
      time = jobs[i][0];
    }
  }

  return Math.floor(total / jobs.length);
}