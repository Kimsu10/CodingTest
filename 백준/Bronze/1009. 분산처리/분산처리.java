import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt(); 
        
        while (num-- > 0) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            
            a = a % 10; 
            if (a == 0) {
                System.out.println(10);
                continue;
            }
            
            int[] cycle;
            if (a == 1 || a == 5 || a == 6) {
                cycle = new int[] {a}; 
            } else if (a == 4 || a == 9) {
                cycle = new int[] {a, (a * a) % 10}; 
            } else {
                cycle = new int[] {a, (a * a) % 10, (a * a * a) % 10, (a * a * a * a) % 10}; 
            }
            
            int idx = (b - 1) % cycle.length;
            System.out.println(cycle[idx]);
        }
        sc.close();
    }
}
