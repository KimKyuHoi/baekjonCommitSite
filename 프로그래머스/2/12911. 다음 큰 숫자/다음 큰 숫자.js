function solution(n) {
    let count = n.toString(2).match(/1/g).length;
    
    while(true){
        n++;
        if(n.toString(2).match(/1/g).length === count){
            return n;
        }
    }

}