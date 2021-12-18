s=['1','2','3','4','5']

def seat(b):
   global s
   if(b=='A6'):
       #s1=['1','2','3','4','5']
    #for i in range (0,2):
       print("CHOOSE YOUR SEAT FROM THESE: ", s,"\n")
       e=input("Enter:   ")
       s2 = s.remove(e)
       print(s2)
   if(b=='A1'):
      s2=['1','2','3','4','5']
    #for i in range (0,2):
      print("CHOOSE YOUR SEAT FROM THESE: ", s2,"\n")
      e=input("Enter:   ")
      s2.remove(e)
      print("thanku")
    
    
