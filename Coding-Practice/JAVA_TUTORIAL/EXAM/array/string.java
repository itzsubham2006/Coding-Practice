import java.util.*;
import java.io.*;

public class string {
    public static void main(String[] args) {
       String s= "Computer Science"; // len = 16

        String s1 = "Computer "; 
        String s2 = "Science"; 

        Boolean out = "CIT".equals("CIT"); 
        System.out.println("Checking Equality " + out); 
        out = "CSE".equals("CIT"); 
        System.out.println("Checking Equality " + out); 
        
        out = "CIT".equalsIgnoreCase("ciT "); 
        System.out.println("Checking Equality " + out);  
                
        int out1 = s1.compareTo(s2); 
        System.out.println("the difference between ASCII value is="+out1);
    }  
}
