import java.util.*;

public class array{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a[] = new int[5];

        for(int i=0; i<a.length;i++){
            System.out.print("Enter the number at idx "+ i +" : ");
            a[i] = sc.nextInt();
        }

        System.out.println(("The array is: "));
        for(int i=0; i<a.length;i++){
            
            System.out.print(" "+a[i]);
            
        }

    }
}