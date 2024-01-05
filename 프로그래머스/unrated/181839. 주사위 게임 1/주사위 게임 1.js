function solution(a, b) {
    const result = 0;
   if(a % 2 === 1 && b % 2 === 1){
       return  a**2 + b**2;
   }else if( a % 2 === 1 || b % 2 === 1 ){
       return  2 * (a + b);
   }else{
       return Math.abs( a - b);
   }

}