const solution = (numbers) => {
     const answer = [];
    let nums = numbers.split(''); 
    
    // 소수 판별
    const isPrimeNum = (num) => {
        if(num<=1) return false;
        for (let i = 2; i*i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 순열 만들기
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                if (!answer.includes(+newNum) && isPrimeNum(+newNum)){
                    answer.push(+newNum) 
                }
                getPermutation(copyArr, newNum); 
            }
        }
    }
    
    getPermutation(nums, '');
    return answer.length;
};