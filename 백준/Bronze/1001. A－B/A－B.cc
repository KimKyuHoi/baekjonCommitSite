#pragma warning(disable : 4996)

#include <stdio.h>
#include <iostream>

using namespace std;

int A, B;
int sum;

void subNum(int a, int b) {
	sum = a - b;
	printf("%d", sum);
}

int main() {
	scanf("%d %d", &A, &B);
	subNum(A, B);
}