function solution(arr1, arr2) {
     let arr1sum = arr1.reduce((acc, cur) => {
        return acc + cur         
        }, 0)
        let arr2sum = arr2.reduce((acc, cur) => {
           return  acc +cur
        },0)
    
    if(arr2.length > arr1.length){
        return  -1;
    } else if( arr1.length > arr2.length){
        return 1;
    } else if(arr2.length === arr1.length && arr1sum === arr2sum){
            return 0;
        }else if( arr2.length === arr1.length && arr1sum > arr2sum){
            return 1;
        }else{
            return -1;
        }
    
}