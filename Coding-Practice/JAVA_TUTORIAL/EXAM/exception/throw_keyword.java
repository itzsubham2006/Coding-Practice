package exception;

class testthrow{
    public void age_validate(int age){
        if(age<0){
            throw new ArithmeticException("Not valid");            
        }
        else System.out.println("Adult");
    }
}

public class throw_keyword {
    public static void main(String[] args) {

        testthrow t1 = new testthrow();
        t1.age_validate(45);
       
    }
    
}
