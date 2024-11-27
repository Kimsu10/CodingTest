class Solution {
    public String solution(String my_string, String alp) {
        String str1 = alp.toUpperCase();
        
        return my_string.replace(alp, str1);
    }
}