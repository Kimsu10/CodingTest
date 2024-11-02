import java.math.BigInteger;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for (int t = 0; t < 3; t++) { 
            int N = sc.nextInt();     
            BigInteger S = BigInteger.ZERO; 

            for (int i = 0; i < N; i++) {
                S = S.add(sc.nextBigInteger()); 
            }

            if (S.equals(BigInteger.ZERO)) {
                System.out.println("0");
            } else if (S.compareTo(BigInteger.ZERO) > 0) {
                System.out.println("+");
            } else {
                System.out.println("-");
            }
        }

        sc.close();
    }
}
