# def allot():
#     import datetime
#     now=datetime.datetime.now()
#     time=now.strftime("%H:%M")
#     if(time>'20:40' and time<'20:44'):
#         a='A1'
#         return(a)
#     elif(time>'20:49' and time<'20:57'):
#         a='A2'
#         return(a)
#     else:
#         print("ok")

#Paltform counter = 13
#Platform pod alotment counter = 6 each
#Seat counter = 28 each


import datetime

seat_counter = 29
pod_bay_counter = 5
platform_counter = 12
time = 0
time_rec = 0


def sec():
  global time
  a = datetime.datetime.now()
  time=int(a.strftime("%M"))
  return (time)

def counth():
    timeh = sec()
    global time_rec
    time_count = 0
    for i in range(time_rec,timeh):
        if(i%5 == 3):
            time_count+=1
    time_rec = timeh
    return(time_count)
    

def allot():
    global seat_counter
    global pod_bay_counter
    global platform_counter
    timeal = counth()
    if(seat_counter > 0):
        if ( timeal > 0):
            pod_bay_counter-= timeal
            if(pod_bay_counter < 0):
                pod_bay_counter = 6 + pod_bay_counter
            seat_counter = 28
        else:
            seat_counter-= 1
    if(seat_counter == 0 and pod_bay_counter != 0):
        pod_bay_counter-= 1
        seat_counter = 28
    if(seat_counter == 0 and pod_bay_counter == 0):
        platform_counter-=1
        pod_bay_counter = 5
        seat_counter = 28
    
    platform_change = 12-platform_counter
    platform_ascii= platform_change + 65
    platform = chr(platform_ascii)
    pod_change = 5-pod_bay_counter
    pod_bay = pod_change +1
    pod = str(pod_bay)
    seat = str(seat_counter)
    str2 = platform + pod + " " + seat
    
    return (str2)



# for i in range(2184):
#   allot()
#   print(i, end=" ")
#   print(platform_counter, pod_bay_counter, seat_counter)

for i in range(100): 
  a =allot()
  print(a)