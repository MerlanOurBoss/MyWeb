a = int(input())



if a % 4 == 0:
  print("YES")
elif a % 100 == 0:
  if a % 400 == 0:
     print("Yes")
  else:
     print("NO")
else:
  print("NO")

