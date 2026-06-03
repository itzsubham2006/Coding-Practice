package inheritence;
import java.util.*;

class bike{
    void run(){
        System.out.println("RUNNNNNN.......");
    }
}

class car extends bike{
    void run(){
        System.out.println("Car also run");
    }
}


public class method_overriding {
    public static void main(String[] args) {
        car c1 = new car();

        c1.run();
    }    
}
