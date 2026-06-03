package exception;
import java.util.*;


public class one {
    public static void main(String[] args) {
        try{
            int a[] = new int[10] ;
            System.out.println(a[34]);

        }
        catch(ArithmeticException e){
            System.out.println("Arithmetic exception occurs");
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Array index out of bounds");
        }

        catch(Exception e){
            System.out.println("Cannot divided by zero.");
        }
    }
    
}
