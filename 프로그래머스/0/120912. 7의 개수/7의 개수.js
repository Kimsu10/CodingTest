function solution(array) {
    let arr = array.map((el,idx )=> el.toString().split(""))
    let sum = 0;
   
    for(let i = 0; i < arr.length; i++){
        for(let j = 0 ; j < arr[i].length; j++){
            if(arr[i][j] == 7){
              sum++;  
            }
        }
    }
    return sum;
}