const solution = (strArr) => {
    let maxLeng = 0;
    const counts = strArr.reduce((acc, cur) => {
        const leng = cur.length;
        acc[leng] = (acc[leng] || 0 ) + 1;
        maxLeng = Math.max(maxLeng, acc[leng]);
        return acc;
    }, {} );
    return maxLeng;
}
