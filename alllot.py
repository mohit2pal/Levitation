
#Paltform counter = 13
#Platform pod alotment counter = 6 each
#Seat counter = 28 each

from blockerallot import variable_edit
import datetime
import json

default_time = 0

seat_counter = 29
pod_bay_counter = 6
# pod_bay_counter = 5
platform_counter = 12
# platform_counter = 13
time = 0
time_rec = default_time
time_rechr = 0
time_hourrecd = 0
pod_rec = ""
allot_time = 0
#pod_d = 0
pod_changed_count = 0
bay_rec = -1

def check_json(t):
    global pod_rec
    global pod_changed_count
    global bay_rec
    # bay2 = pod_rec
    bay = int(t[1:2])
    if(t != pod_rec):
        dicto = {"change": 'true'}
        json_object = json.dumps(dicto, indent = 1)
        with open("./static/js/change.json", "w") as outfile:
           outfile.write(json_object)
        if(bay != bay_rec):
           pod_changed_count+=1
           bay_rec = bay
    else:
        dicto = {"change": 'false'}
        json_object = json.dumps(dicto, indent = 1)
        with open("./static/js/change.json", "w") as outfile:
            outfile.write(json_object)
    pod_rec = t

    
def check(l,sto):
    dmg = []
    # dmg = l.split()
    for j in l:
        dmg_string = ""
        g = j
        g+=1
        counter_j =  int(j/6)
        dmg_string = dmg_string + str(chr(counter_j+65))
        dmg_string = dmg_string + str(g-(counter_j*6))
        dmg.append(dmg_string)
    print("The processed dmaged pods are:", dmg)
    pid = allot(sto)
    pidd = pid[:2]
    while(1 != 0):
        if(pidd in dmg):
            pid = allot(sto)
            pidd = pid[:2]
        else:
            break
    # for i in dmg:
    #   while(pidd == i):
    #      pid = allot(sto)
    #      pidd = pid[:2]
    # check_json(pidd)
    variable_edit(seat_counter,pod_bay_counter,platform_counter,time,time_rec,time_rechr,time_hourrecd,pod_rec,allot_time,pod_changed_count,bay_rec,default_time)
    return pidd
       
        
def sec():
  global time
  global time_hourrecd
  global time_rechr
  global timesec
  a = datetime.datetime.now()
  timemin=int(a.strftime("%M"))
  timehr = int(a.strftime("%H"))
  timesec = int(a.strftime("%S"))
  time = (timehr*60*60) + (timemin*60) + timesec
#   time_rechr = timehr - time_hourrecd
#   time_hourrecd = timehr
  return (time)


def counth():
    timeh = sec()
    # timeh = (time_rechr*60*60) + (timeh1*60) + timesec
    global time_rec
    time_count = 0
    # if(time_rechr > 0):
    #     pass
    # else:
    for i in range(time_rec,timeh):
       if(i%90 == 30):
         time_count+=1
    # time_rec = timeh - (time_rechr*60)
    if(seat_counter == 29):
        time_count = 10
    if(time_rec < timeh):
        time_rec = timeh
    return(time_count)

def differ():
    global pod_changed_count
    time_differ = counth()
    pod_differ = pod_changed_count
    
    pod_changed = pod_differ - time_differ
    if(pod_changed < 0):
        pod_changed_count = -1
        # pod_changed_count = 0
        j = 1
        return (j)
    # elif(pod_changed < 0):
    #     pod_changed_count = 0
    #     l = 1
    #     return(l)
    else:
        pod_changed_count = pod_changed
        k = 0
        return (k)
    
# def reset_pod():
#     global pod_bay_counter
#     global platform_counter
#     global seat_counter
#     if(pod_bay_counter == 0 and platform_counter == 0 and seat_counter == 1):
#         seat_counter = 29
#         pod_bay_counter = 6
#         platform_counter = 12
    
def blocker():                               # 0 is blocked and 1 is allowed
    global allot_time
    time = sec()
    if(seat_counter==29):
      allot_time = time + 300
      o = 1
      return(o)
    elif(time > allot_time):
        p = 1
        return(p)
    elif(time < allot_time and (pod_bay_counter != 0 or platform_counter != 0 or seat_counter != 1)):
         u = 1 
         return(u)
    else:
        l=0
        # l=1
        return(l)   

def allot(res):
    global seat_counter
    global pod_bay_counter
    global platform_counter
    global pod_dmg
    if(res == 0):
        timeal = differ()
        block_code =  blocker()
    elif(res == 1):
        timeal = 0
        block_code = 1
    print("Timeal:", timeal)
    if(block_code == 1):
        pass
    elif(block_code == 0):
        return("Blocked")
    # if(block_code == 1):
    if(seat_counter > 0):
        # if(seat_counter > 28):
        #     seat_counter = 28
        if ( timeal > 0):
            # pod_bay_counter-= timeal
            pod_bay_counter-= 1
            platform_counter = 12
            # platform_counter-=1
            if(pod_bay_counter < 0):
            # if(platform_counter < 0):
                # pod_bay_counter = 6 + pod_bay_counter
                # platform_counter-= 1
                # pod_bay_counter-=1
                # pod_bay_counter = 5
                platform_counter = 12
                pod_bay_counter = 5
            seat_counter = 28
        else:
            seat_counter-= 1
    # if(seat_counter == 0 and pod_bay_counter != 0):
    if(seat_counter == 0 and platform_counter != 0):
        # pod_bay_counter-= 1
        platform_counter-= 1
        seat_counter = 28
    # if(seat_counter == 0 and pod_bay_counter == 0):
    if(seat_counter == 0 and platform_counter == 0):
        # platform_counter-=1
        pod_bay_counter-=1
        # pod_bay_counter = 5
        platform_counter = 12
        seat_counter = 28
    # if(platform_counter < 0):
    if(pod_bay_counter < 0):
        # platform_counter = 12
        pod_bay_counter = 5
    # if(seat_counter == 28 and pod_bay_counter < 0):
    #     platform_counter-= 1
    #     pod_bay_counter = 5

    #if (pod_d = A1):

        
    

    platform_change = 12-platform_counter
    platform_ascii= platform_change + 65
    platform = chr(platform_ascii)
    pod_change = 5-pod_bay_counter
    pod_bay = pod_change +1
    pod = str(pod_bay)
    seat = str(seat_counter)
    str3 = platform + pod
    str2 = platform + pod + " " + seat
    check_json(str3)
    print(str2)
    return (str2)
    # else:
    #     pass


# for i in range(5):
# for i in range(2200): 
#     #   a =check("0")
#     a = check([0,1,2],0)
#     print(a)


# def find(u):
#  o=u
#  for i in range(900):   
#    c =check(o)
#    print(c) 

#  return c


