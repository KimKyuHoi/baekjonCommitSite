// function solution(arr1, arr2) {
//     const Arr = []
    
//     let sum = 0;
    
//     for(let i = 0; i < arr1.length; i++){
//         let result = []
//        for(let j = 0; j < arr2[0].length; j++){
//            let elem = 0;
//            for(let k = 0; k < arr2.length; k++) { 
//                 elem += arr1[i][k] * arr2[k][j];
//             }
//            result.push(elem)
         
//        }
//         Arr.push(result)
//     }
    
//     return Arr;
// }

// // 2 3 2
// // 4 2 4
// // 3 1 4 

// // 5 4 3
// // 2 4 1
// // 3 1 1

// // 22 22 11
// // 36 28 18
// // 29 20 14

function solution(arr1, arr2) {
    // 결과 행렬의 크기: arr1의 행 개수 × arr2의 열 개수
    const result = Array(arr1.length).fill().map(() => Array(arr2[0].length).fill(0));
    
    // 행렬 곱셈 수행
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2[0].length; j++) {
            for(let k = 0; k < arr2.length; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
}