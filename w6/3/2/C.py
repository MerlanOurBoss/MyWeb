import math
a = int(input())
p = math.pow(2,0)
i = 1
while(p<=a):
	print(int(p), end = ' ')
	p = math.pow(2,i)
	i = i +1
