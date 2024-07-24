function solution(name, yearning, photo) {
    let memory = photo.reduce((acc, point) => {
        let score = 0;
      point.forEach(i => {
          const n = name.indexOf(i);
          if(n >=0 ){
              score += yearning[n];
          }
      });
        return [...acc,score];
    },[]);
    return memory;
}


