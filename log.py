
'''a=['A1','A2','A3','A4','A5']
def seat():
    
 for i in range (0,2):
    print("CHOOSE YOUR SEAT FROM THESE: ", a ,"\n")
    s=input("Enter:   ")
    a.remove(s)
    print("thanku")'''

import pandas as pd

# SAVING PASSENGERS DATA

data1 = {'DATE':[],'NAME':[],'AGE':[],'MOBILE':[],'DESTINATION':[],'POD_BAY':[],'NO. OF SEATS': [],'TIME':[]}
     
df = pd.DataFrame(data1)

def save(date1,name1,age1,mob1,dest1,bay,nseats,time1):
    global df
    new_row={'DATE': date1,'NAME': name1,'AGE': age1, 'MOBILE': mob1,'DESTINATION': dest1,'POD_BAY': bay,'NO. OF SEATS': nseats,'TIME': time1}
  
    df=df.append(new_row, ignore_index=True) 
    df.to_csv("./static/css/passengers_data.csv",mode='a', header=False, index=False)
    

# SAVING RECIEVERS DATA

data2 = {'DATE':[],'NAME':[],'AGE':[],'MOBILE':[],'TIME':[]}
     
df2 = pd.DataFrame(data2)

def save2(date2,name2,age2,mob2,time2):
    global df2
    new_row={'DATE': date2,'NAME': name2,'AGE': age2, 'MOBILE': mob2,'TIME': time2}
    
    df2=df2.append(new_row, ignore_index=True) 
    df2.to_csv("./static/css/recievers_data.csv", mode='a', header=False, index=False) 
     
    # data = pd.read_csv("./static/css/recievers_data.csv")

# df2.drop_duplicates(subset ='TIME' ,keep=False,inplace=True)


    

# def add():
#     c= 'POD_BAY'
#     if(df[c].get()=='A1'):
#      column='NO. OF SEATS'
#      total=df[column].sum()
#      print(total)
    
# def baysave(bay):
#     global df
#     new_row={'POD_BAY': bay}
#     df=df.append(new_row, ignore_index=True) 
#     df.to_csv("passengers_data.csv", header=True, index=True)
    
