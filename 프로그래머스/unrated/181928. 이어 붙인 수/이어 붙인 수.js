function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for(num of num_list){
       num % 2 === 1 ? odd= odd*10 + num : even = even * 10 + num 
    }
    return odd + even;
}