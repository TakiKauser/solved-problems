#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    double p, t, a, q;
    cin >> p >> t >> a >> q;
    int i = 0;
    while(p < q){
        p = (p + ((p * t) / 100)) + a;
        i++;
    }
    cout << i << endl;
    return 0;
}
