function solution(arr) {
    const line = arr.length;
    const heat = arr[0].length;

    if (heat < line) {
        for (let i = 0; i < line; i++) {
            while (arr[i].length < line) {
                arr[i].push(0);
            }
        }
    }

    if (line < heat) {
        while (arr.length < heat) {
            arr.push(new Array(heat).fill(0));
        }
    }

    return arr;
}