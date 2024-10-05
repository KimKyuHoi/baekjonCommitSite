function solution(n)
{
    var ans = 0;
    
    while (n > 0){
        if (n % 2 === 1){
            ans ++;
            n--;
        } else{
            n = n / 2
        }
    }
    
//     console.log(ans)
    return ans;
}