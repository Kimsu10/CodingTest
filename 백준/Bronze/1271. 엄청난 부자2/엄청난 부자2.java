import java.math.BigInteger;
import java.util.Scanner;

public class Main {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);

        BigInteger n = sc.nextBigInteger();
        BigInteger m = sc.nextBigInteger();

        BigInteger money = n.divide(m);
        BigInteger lest = n.remainder(m);

        System.out.println(money);
        System.out.println(lest);
        
        sc.close();
    }
}
