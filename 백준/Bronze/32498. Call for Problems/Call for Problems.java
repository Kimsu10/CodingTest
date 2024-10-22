import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
   
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int exCount = 0;
   
        for (int i = 0; i < n; i++) {
            int diff = sc.nextInt();
   
            if (diff % 2 != 0) {
                exCount++;
            }
        }
        
        System.out.println(exCount);
        sc.close();
    }
}
