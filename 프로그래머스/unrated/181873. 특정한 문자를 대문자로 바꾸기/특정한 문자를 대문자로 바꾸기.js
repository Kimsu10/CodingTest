function solution(my_string, alp) {
   const result = my_string.split('').map((el) => {
       if(el === alp){
           return el.toUpperCase();
       }
       return el;
   });
    return result.join('');
}