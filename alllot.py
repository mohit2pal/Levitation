
#Paltform counter = 13
#Platform pod alotment counter = 6 each
#Seat counter = 28 each


import datetime

seat_counter = 29
pod_bay_counter = 6
platform_counter = 12
time = 0
time_rec = 0
time_rechr = 0
time_hourrecd = 0

def sec():
  global time
  global time_hourrecd
  global time_rechr
  a = datetime.datetime.now()
  time=int(a.strftime("%M"))
  timehr = int(a.strftime("%H"))
  time_rechr = timehr - time_hourrecd
  time_hourrecd = timehr
  return (time)

def counth():
    timeh1 = sec()
    timeh = (time_rechr*60) + timeh1
    global time_rec
    time_count = 0
    # if(time_rechr > 0):
    #     pass
    # else:
    for i in range(time_rec,timeh):
       if(i%5 == 3):
         time_count+=1
    time_rec = timeh - (time_rechr*60)
    return(time_count)
    

def allot():
    global seat_counter
    global pod_bay_counter
    global platform_counter
    timeal = counth()
    if(seat_counter > 0):
        # if(seat_counter > 28):
        #     seat_counter = 28
        if ( timeal > 0):
            # pod_bay_counter-= timeal
            pod_bay_counter-= 1
            if(pod_bay_counter < 0):
                # pod_bay_counter = 6 + pod_bay_counter
                platform_counter-= 1
                pod_bay_counter = 5
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
    if(platform_counter < 0):
        platform_counter = 12
    # if(seat_counter == 28 and pod_bay_counter < 0):
    #     platform_counter-= 1
    #     pod_bay_counter = 5
        
    platform_change = 12-platform_counter
    platform_ascii= platform_change + 65
    platform = chr(platform_ascii)
    pod_change = 5-pod_bay_counter
    pod_bay = pod_change +1
    pod = str(pod_bay)
    seat = str(seat_counter)
    str2 = platform + pod + " " + seat
    
    return (str2)


# for i in range(100): 
#   a =allot()
#   print(a)