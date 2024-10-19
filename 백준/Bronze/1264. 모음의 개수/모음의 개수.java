import java.util.*;

public class Main {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
    
        String str = "";
    
        while(true){
            str = sc.nextLine().toLowerCase();  
            if (str.equals("#")) break;         

            int cnt = 0;  

            
            for (int i = 0; i < str.length(); i++) {
                char ch = str.charAt(i);
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    cnt++;
                }
            }
            
            System.out.println(cnt);
        }
    }
}
