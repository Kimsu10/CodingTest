import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int F = sc.nextInt();
        
        N = (N / 100) * 100;
        
        for(int i = 0; i < 100; i++){
            if((N + i) % F == 0){
                N = N + i;
                if(i < 10) System.out.print("0");
                System.out.print(i);
                break;
            }
        }
    }
}