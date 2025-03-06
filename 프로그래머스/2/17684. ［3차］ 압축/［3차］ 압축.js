function solution(msg) {
    const dict = {};
    for(let i = 0; i<26; i++){
        dict[String.fromCharCode(65+i)] = i+1;
    }
    
    let result = [];
    let nextIndex = 27;
    let pos = 0;
    
    while (pos < msg.length) {
        let w = msg[pos];
        let i = pos;
    
  
        while (i + 1 < msg.length && dict[w + msg[i + 1]] !== undefined) {
              w += msg[i + 1];
              i++;
        }
    
        result.push(dict[w]);
        
        if (i + 1 < msg.length) {
          const c = msg[i + 1];
          dict[w + c] = nextIndex;
          nextIndex++;
        }

        pos = i + 1;
  }
  
  return result;
}
