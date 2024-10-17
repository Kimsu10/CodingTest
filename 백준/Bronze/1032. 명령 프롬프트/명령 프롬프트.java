import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        sc.nextLine();
        
        String[] files = new String[N];

        for (int i = 0; i < N; i++) files[i] = sc.nextLine();

        char[] result = files[0].toCharArray();

        for (int i = 1; i < N; i++) {
            for (int j = 0; j < files[i].length(); j++) {
                if (result[j] == '?') continue;
                if (result[j] == files[i].charAt(j)) continue;
                
                result[j] = '?';
            }
        }

        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
        }
    }
}