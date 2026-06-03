// Returning Array from the Method

import java.util.*;


class returnArray{

    int[] get(){
        return new int[]{1,34,33,23,63};
    }    

}
public class arr_obj {

    public static void main(String[] args) {
        returnArray obj = new returnArray();
        int arr[] = obj.get();

        for(int i=0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }
}


