function solution(arr, queries) {
    let result = [];
    
    for(let i =0; i < queries.length; i++){
        
        const [s, e, k] = queries[i];
        let min = 1000001;
        let found = false;
        
          for (let j = s; j <= e; j++) {
            if (arr[j] > k && arr[j] < min) {
                min = arr[j];
                found = true;
            }
        }
        result.push(found ? min : -1);
    }
    return result;
}