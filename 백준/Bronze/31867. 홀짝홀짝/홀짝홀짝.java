import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); 
        String str = sc.next(); 
        
        int even = 0; 
        int odd = 0; 
        
        int num;
        for (int i = 0; i < n; i++) {
            num = str.charAt(i) - '0'; 
            
            if (num % 2 == 0) { 
                even++;
            } else { 
                odd++;
            }
        }
        
        int result = -1;
        if (even > odd) { 
            result = 0;
        } else if (even < odd) { 
            result = 1;
        }
        
        System.out.println(result);
        sc.close();
    }
}
