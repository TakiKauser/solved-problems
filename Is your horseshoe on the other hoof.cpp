#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int shoeColor[4];
    int counter = 3;
    for (int i = 0; i < 4; i++){
        scanf("%d", &shoeColor[i]);
    }
    sort(shoeColor, shoeColor + 4);
    for (int i = 0; i < 3; i++){
        if (shoeColor[i] != shoeColor[i+1]){
            counter--;
        }
    }
    cout <<  counter << endl;
    return 0;
}
