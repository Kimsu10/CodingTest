function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
   for(let i = 0; i < num_list.length; i++){
       if(i % 2 !== 0){
           oddSum += Number(num_list[i]);  
       }else {
           evenSum += Number(num_list[i]);
       }
   }
     return Math.max(oddSum, evenSum);
}