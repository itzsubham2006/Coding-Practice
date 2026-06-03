package inheritence;
import java.util.*;
import java.io.*;

class speaker{
    void speaker_func(){
        System.out.println("This is a speaker function");
    }
}

class camera extends speaker{
    void camera_func(){
        System.out.println("This is camera function");
    }
}

class phone extends camera{
    void display_name(){
        System.out.println("This is a smart phone");
    }
    

}

public class mutli_level_inheritence {
    public static void main(String[] args) {
        phone p1 = new phone();
        p1.speaker_func();
        p1.camera_func();
        p1.display_name();
    }
}
