import java.util.*;

class findMin{
    
    void min(int a[]){
        int minimum = a[0];
        for(int i=0; i<a.length; i++){
            if(a[i]<minimum){
                minimum = a[i];
            }
        }
        
    }

}

public class pass_arr_asmethod {
    public static void main(String[] args) {
        int a[] = {34,674,123,1};
        findMin f1 = new findMin();
        f1.min(a);
    }
    
}
