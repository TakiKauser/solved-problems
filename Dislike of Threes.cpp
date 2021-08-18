#include<bits/stdc++.h>
using namespace std;

void solution(){
    int userInput;
    int polycarpArray [100001];

    scanf("%d", &userInput);

    int j = 0;
    for (int i = 1; i <= 3000; i++){
        if(((i % 3) != 0) && ((i % 10) != 3)){
            polycarpArray[++j] = i;
        }
    }
    cout << polycarpArray[userInput] << endl;
}
int main(){
    int test = 0;
    scanf("%d", &test);

    while(test--){
        solution();
    }

    return 0;
}
