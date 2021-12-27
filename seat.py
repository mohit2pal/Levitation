    
s=['1','2','3','4','5'] 

store = ""
s=[1,2,3,4,5,6,7,8,9]

def seat(b):
 global s
 global store
 a=64

 if(b==store):
     '''for i in range(1,14):
      a=a+1
      c=1
      for j in range(1,7):
           platform_ascii=chr(a)
           platform= str(platform_ascii)          
           bay= str(c)
           c=c+1
           str2= platform + bay
           print(str2)
           if(b== str2):'''
            
     print("CHOOSE YOUR SEAT FROM THESE: ", s,"\n")
     e=input("Enter:   ")
     s.remove(e)
     print(s)

 else:
      s=['1','2','3','4','5'] 
      print("CHOOSE YOUR SEAT FROM THESE: ", s,"\n")
      e=input("Enter:   ")
      s.remove(e)
      print(s)

 store=b


# seat("A1")
# print(store)
# seat("A1")
# seat("A3")
# seat("A3")   

def seats(a):
  global s
  global sub
  sub = list(set(s) - set(a))

# print subtraction value
  print('list1 - list2 =', sub)


from alllot import *
  
def find(u):
    o=len(u)
    for i in range(0,o): 
      a =allot()
    #   return a
  
    print(a)
