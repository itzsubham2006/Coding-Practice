#include <stdio.h>


int is_safe(int board[3][3], int row, int n){

}


void nQueen(int board[3][3], int row, int n){

    if(row==n){
        printf("Answer");
    }

    else
    {
        for(int j=0; j<n; j++){
            
            int val = is_safe(board, row, n);

            if(val==1)
            {
                board[row][j] = 'Q';
                nQueen(board, row+1, n);
            }

        }

    }
}



int main(){

}