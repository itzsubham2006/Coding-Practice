package inheritence;

class grandparent{
    void grandparent_name(){
        System.out.println("This is grandparent class");
    }
}

class parent extends grandparent{
    void parent_name(){
        System.out.println("This is parent class");
    }
}

class child extends parent{
    void child_name(){
        System.out.println("This is child");
        
        super.parent_name();
        super.super.grandparent_name();
        
    }
}


public class super_method {
    public static void main(String[] args) {
        child g1 = new child();
        g1.child_name();
    }
    
}
