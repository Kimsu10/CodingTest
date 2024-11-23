function solution(n, slicer, num_list) {   
    
    let i = 0;
    while(i < num_list.length){
        if(n === 1){
           return num_list.slice(0, slicer[1]+1)
        }else if( n === 2){
           return num_list.slice(slicer[0], num_list.length);
        }else if(n === 3){
           return num_list.slice(slicer[0], slicer[1] + 1);
        }else if(n === 4){
           return num_list.slice(slicer[0], slicer[1] + 1)
               .filter((_, index) => index % slicer[2] === 0);
        }
    }
}