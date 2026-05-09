// class Solution {
//     public int solution(int[] num_list, int n) {
//         for(int i = 0; i < num_list.length; i++){
//             if(num_list[i] == n){
//               return 1;  
//             } 
//         }
//         return 0;
//     }
// }

import java.util.Arrays;

class Solution {
    public int solution(int[] num_list, int n) {
        return Arrays.stream(num_list)
                .anyMatch(num -> num == n) ? 1 : 0;
    }
}