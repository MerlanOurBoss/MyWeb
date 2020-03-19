cnt = 0
a = int(input())
for i in range(1, a//2+1):
	if a%i == 0:
		cnt = cnt +1
print(cnt+1)
