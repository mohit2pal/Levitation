
'''a=['A1','A2','A3','A4','A5']
def seat():
    
 for i in range (0,2):
    print("CHOOSE YOUR SEAT FROM THESE: ", a ,"\n")
    s=input("Enter:   ")
    a.remove(s)
    print("thanku")'''

import pandas as pd

data = {'NAME':[],'AGE':[],'MOBILE':[],'DESTINATION':[],'POD_BAY':[],'NO. OF SEATS': []}
     
df = pd.DataFrame(data)

def save(name1,age1,mob1,dest1,bay,nseats):
    global df
    new_row={'NAME': name1, 'AGE': age1, 'MOBILE': mob1,'DESTINATION': dest1,'POD_BAY': bay,'NO. OF SEATS': nseats}
    df=df.append(new_row, ignore_index=True) 
    df.to_csv("passengers_data.csv", header=True, index=True)
    

def add():
    c= 'POD_BAY'
    if(df[c].get()=='A1'):
     column='NO. OF SEATS'
     total=df[column].sum()
     print(total)
    
def baysave(bay):
    global df
    new_row={'POD_BAY': bay}
    df=df.append(new_row, ignore_index=True) 
    df.to_csv("passengers_data.csv", header=True, index=True)
    
def entry(name1,age1,mob1,dest1):
    n=name1
    ag=age1
    m=mob1
    d=dest1
    L=("\n",n,"   ",ag,"   ",m,"     ",d)
    f1=open('log.txt','a')
    f1.writelines(L)
    f1.close()

def rentry(name,age,mob):
    n=name
    ag=age
    m=mob
    L=("\n",n,"   ",ag,"   ",m)
    f1=open('rdata.txt','a')
    f1.writelines(L)
    f1.close()