import java.util.*;

public class Main{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int treeAm = sc.nextInt();
        int watt = sc.nextInt();
        int volt = sc.nextInt();
        int adapterAm = watt/volt;
        
        if(adapterAm >= treeAm){
            System.out.println(1);
        }else {
            System.out.println(0);
        }
        
        sc.close();
    }
}