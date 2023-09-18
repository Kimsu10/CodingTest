#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    return ((float)num1 / num2) * 1000;
}

int main() {
    int result = solution(5,2);
    printf("%d\n", result);
    return 0;
}