function solution(my_string) {
    const alphabetArray = [];
    
    for (let i = 97; i <= 122; i++) {
      alphabetArray.push(String.fromCharCode(i));
    }
    for (let i = 65; i <= 90; i++) { 
      alphabetArray.push(String.fromCharCode(i));
    }

    const result = new Array(52).fill(0);
    
    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];

        
        if (char >= 'A' && char <= 'Z') {
            const index = char.charCodeAt(0) - 65;  
            result[index]++;
        }
   
        else if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 71;  
            result[index]++;
        }
    }

    return result;
}