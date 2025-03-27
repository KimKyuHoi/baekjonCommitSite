function solution(nums) {
    let s_num = new Set(nums)
    if(s_num.size > nums.length / 2) return nums.length / 2;
    else return s_num.size;
}