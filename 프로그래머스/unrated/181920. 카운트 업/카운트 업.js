function solution(start_num, end_num) {
    let result =[];
   for(let i = start_num; i <= end_num; i++){
       if(i >= start_num && i <= end_num){
           result.push(i)
       }
   }return result
}