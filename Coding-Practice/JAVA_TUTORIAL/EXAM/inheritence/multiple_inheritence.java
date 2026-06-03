package inheritence;

import java.util.*;

interface father{
    void boy();
     
}

interface mother{
    void ladla();
}

class son implements father, mother{

    public void boy(){
        System.out.println("He is a boy of father");
    }
    public void ladla(){
        System.out.println("He is a ladla of mother");
    }
}


public class multiple_inheritence {
    public static void main(String[] args) {
        son s1 = new son();
        
        s1.ladla();
        s1.boy();
    }
}
