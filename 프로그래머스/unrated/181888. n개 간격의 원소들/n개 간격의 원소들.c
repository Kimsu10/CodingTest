#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// num_list_len은 배열 num_list의 길이입니다.
int* solution(int num_list[], size_t num_list_len, int n) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int* answer = (int*)malloc((num_list_len + 1) * sizeof(int));
    int a = 0;
    for (size_t i = 0; i < num_list_len; i = i + n)
    {
        answer[a] = num_list[i];
        a++;
    }
    return answer;
}

// answer[a] ='\0'
// 문자열의 끝을 나타내는 null-terminated string = '\0';
// C언어에서 문자열은 문자의 배열로 표현된다.
// 널 종료 문자는 문자열의 끝을 나타내며, 문자열 함수들은 이 문자를 찾아서 문자열의 끝을 판단한다.
// 문자열 함수가 문자열을 처리하고  문자열의 끝을 파악하는데 사용되기때문에 문자열 처리시에 사용하는것이 좋다.
