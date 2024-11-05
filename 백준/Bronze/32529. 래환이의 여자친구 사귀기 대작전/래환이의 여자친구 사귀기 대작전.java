import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int M = sc.nextInt();
        int A[] = new int [N];
        
        for(int i = 0; i < N; i++){
            A[i] = sc.nextInt();
        }
        
        int start = 0;
        int end = 0;
        int weight = 0;
        int result = -1;
        
        while(end < N ){
            weight += A[end];
            end++;
            
            while (weight >= M){
                result = start + 1;
                weight -= A[start];
                start++;
            }
        }
        System.out.println(result);

    }
}