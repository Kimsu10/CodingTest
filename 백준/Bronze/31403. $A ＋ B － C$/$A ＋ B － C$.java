import java.util.Scanner;

public class Main {
    public static void main(String[] args) {  
        
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        int result = a + b - c;
        String strSum = String.valueOf(a) + String.valueOf(b);
        int result2 = Integer.parseInt(strSum) - c;
        
        System.out.println(result);
        System.out.println(result2);
        
        sc.close(); 
    }
}
