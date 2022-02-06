
#Paltform counter = 13
#Platform pod alotment counter = 6 each
#Seat counter = 28 each

from alllot import *
import datetime
import json
counter = 0

st = 0
default_timeht = 0                #The default time when the program starts.
# seat_counter = 29
seat_counter2 = 29                #The number of seats with which program starts.
# pod_bay_counter = 6
# pod_bay_counter = 5
pod_bay_counter2 = 6              #The number of Pod Bays with which program starts.
# platform_counter = 12
platform_counter2 = 12            #The number of Platforms with which program starts.
# platform_counter = 13
# time = 0
time2 = 0                         #To initialise the current time.
# time_rec = 0
time2_rec = st                    #The default time when the program starts.
# time_rechr = 0
time2_rechr = 0                   #It records the hour of the current time
# time_hourrecd = 0
time2_hourrecd = 0                #It records the time of the current time, Now defunct.
pod_rec2 = ""                     #Records the previously alloted pod.
allot_time2 = 0                   #It records the previously alloted pod`s time, Now defunct.
#pod_d = 0
pod_changed_count2 = 0            #It is used to calculate the amount of pod booked between a critical time.
bay_rec2 = -1                     #It records the previosly alloted pod bay, used in check json

# pidd2 = 0

# To sync the variable values with alllot.

def variable_edit(seat_counter,pod_bay_counter,platform_counter,time,time_rec,time_rechr,time_hourrecd,pod_rec,allot_time,pod_changed_count,bay_rec,default_time):
        global counter
        global seat_counter2
        global st
        global pod_bay_counter2
        global platform_counter2
        global time2
        global time2_rec
        global time2_rechr
        global time2_hourrecd
        global pod_rec2
        global allot_time2
        global pod_changed_count2
        global bay_rec2
        st = default_time
        # seat_counter = 29
        seat_counter2 = seat_counter
        # pod_bay_counter = 6
        # pod_bay_counter = 5
        pod_bay_counter2 = pod_bay_counter
        # platform_counter = 12
        platform_counter2 = platform_counter
        # platform_counter = 13
        # time = 0
        time2 = time
        # time_rec = 0
        time2_rec = time_rec
        # time_rechr = 0
        time2_rechr = time_rechr
        # time_hourrecd = 0
        time2_hourrecd = time_hourrecd
        pod_rec2 = pod_rec
        allot_time2 = allot_time
        #pod_d = 0
        pod_changed_count2 = pod_changed_count
        bay_rec2 = bay_rec
        counter = 0

def check_json2(t):
    global pod_rec2
    global pod_changed_count2
    global bay_rec2
    # bay2 = pod_rec2
    bay = int(t[1:2])
    if(t != pod_rec2):
        # dicto = {"change": 'true'}
        # json_object = json.dumps(dicto, indent = 1)
        # with open("./static/js/change.json", "w") as outfile:
        #    outfile.write(json_object)
        if(bay != bay_rec2):
           pod_changed_count2+=1
           bay_rec2 = bay
    else:
        pass
        # dicto = {"change": 'false'}
        # json_object = json.dumps(dicto, indent = 1)
        # with open("./static/js/change.json", "w") as outfile:
        #     outfile.write(json_object)
    pod_rec2 = t

    
def check2(l,sto):                  # l = damaged pod , sto = If first pod booking 0 and 1 for multiple pods bookings.
    global counter
    global pidd2
    if(counter != 1):
        dmg = []                    # To store damage pods in processed form
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
        pid = allot2(sto)           # It is the alloted pod bay and seat
        pidd = pid[:2]
        while(1 != 0):
            if(pidd in dmg):
                pid = allot2(sto)
                pidd = pid[:2]
            else:
                break
        # for i in dmg:
        #   while(pidd == i):
        #      pid = allot(sto)
        #      pidd = pid[:2]
        # check_json2(pidd)
        pidd2 = pidd[1:2]
        pidd3 = pid[3:5]
        counter = 1
        edit(pidd2,pidd3)

def edit(t,u):              #To store the values of the pod to be alloted and time for the seats to be alloted.                 
    t2 = int(t)
    u2 = int(u)
    st2 = st
    dicto = {"pod": t2 , "time_recod": st2 , "seats": u2}
    json_object = json.dumps(dicto, indent = 1)
    with open("./static/js/block.json", "w") as outfile:
        outfile.write(json_object)
        
          
        
def sec2():
  global time2
  global time2_hourrecd
  global time2_rechr
  global time2sec
  a = datetime.datetime.now()
  time2min=int(a.strftime("%M"))
  time2hr = int(a.strftime("%H"))
  time2sec = int(a.strftime("%S"))
  time2 = (time2hr*60*60) + (time2min*60) + time2sec
#   time2_rechr = time2hr - time2_hourrecd
#   time2_hourrecd = time2hr
  return (time2)


def counth2():
    time2h = sec2()         # timeh stores the current time
    # time2h = (time2_rechr*60*60) + (time2h1*60) + time2sec
    global time2_rec
    time2_count = 0         # To store the no. of critical point reached.
    # if(time2_rechr > 0):
    #     pass
    # else:
    for i in range(time2_rec,time2h):
       if(i%90 == 30):
         time2_count+=1
    # time2_rec = time2h - (time2_rechr*60)
    if(seat_counter2 == 29):
        time2_count = 10
    if(time2_rec < time2h):
        time2_rec = time2h
    return(time2_count)

def differ2():
    global pod_changed_count2
    time2_differ = counth2()
    pod_differ = pod_changed_count2     #It is used to calculate the amount of pod booked between a critical time.
    
    pod_changed = pod_differ - time2_differ
    if(pod_changed < 0):
        pod_changed_count2 = -1
        # pod_changed_count2 = 0
        j = 1
        return (j)
    # elif(pod_changed < 0):
    #     pod_changed_count2 = 0
    #     l = 1
    #     return(l)
    else:
        pod_changed_count2 = pod_changed
        k = 0
        return (k)
    
# def reset_pod():
#     global pod_bay_counter22
#     global platform_counter2
#     global seat_counter2
#     if(pod_bay_counter22 == 0 and platform_counter2 == 0 and seat_counter2 == 1):
#         seat_counter2 = 29
#         pod_bay_counter22 = 6
#         platform_counter2 = 12
    
# def blocker():                               # 0 is blocked and 1 is allowed
#     global allot_time2
#     time2 = sec()
#     if(seat_counter2==29):
#       allot_time2 = time2 + 300
#       o = 1
#       return(o)
#     elif(time2 > allot_time2):
#         p = 1
#         return(p)
#     elif(time2 < allot_time2 and (pod_bay_counter2 != 0 or platform_counter2 != 0 or seat_counter2 != 1)):
#          u = 1 
#          return(u)
#     else:
#         l=0
#         # l=1
#         return(l)   

def allot2(res):                # res = sto
    global seat_counter2
    global pod_bay_counter2
    global platform_counter2
    global pod_dmg
    if(res == 0):
        timeal = differ2()     # When Timeal = 0 time is not considered and when Timeal = 1 time is considered.
        # block_code =  blocker()
    elif(res == 1):
        timeal = 0
        # block_code = 1
    print("Timeal:", timeal)
    # if(block_code == 1):
    #     pass
    # elif(block_code == 0):
    #     return("Blocked")
    # if(block_code == 1):
    if(seat_counter2 > 0):
        # if(seat_counter2 > 28):
        #     seat_counter2 = 28
        if ( timeal > 0):
            # pod_bay_counter2-= timeal
            pod_bay_counter2-= 1
            platform_counter2 = 12
            # platform_counter2-=1
            if(pod_bay_counter2 < 0):
            # if(platform_counter2 < 0):
                # pod_bay_counter2 = 6 + pod_bay_counter2
                # platform_counter2-= 1
                # pod_bay_counter2-=1
                # pod_bay_counter2 = 5
                platform_counter2 = 12
                pod_bay_counter2 = 5
            seat_counter2 = 28
        else:
            seat_counter2-= 1
    # if(seat_counter2 == 0 and pod_bay_counter2 != 0):
    if(seat_counter2 == 0 and platform_counter2 != 0):
        # pod_bay_counter2-= 1
        platform_counter2-= 1
        seat_counter2 = 28
    # if(seat_counter2 == 0 and pod_bay_counter2 == 0):
    if(seat_counter2 == 0 and platform_counter2 == 0):
        # platform_counter2-=1
        pod_bay_counter2-=1
        # pod_bay_counter2 = 5
        platform_counter2 = 12
        seat_counter2 = 28
    # if(platform_counter2 < 0):
    if(pod_bay_counter2 < 0):
        # platform_counter2 = 12
        pod_bay_counter2 = 5
    # if(seat_counter2 == 28 and pod_bay_counter2 < 0):
    #     platform_counter2-= 1
    #     pod_bay_counter2 = 5

    #if (pod_d = A1):

        
                                    #To convert the alloted pod and seats to processed form

    platform_change = 12-platform_counter2
    platform_ascii= platform_change + 65
    platform = chr(platform_ascii)
    pod_change = 5-pod_bay_counter2
    pod_bay = pod_change +1
    pod = str(pod_bay)
    seat = str(seat_counter2)
    str3 = platform + pod
    str2 = platform + pod + " " + seat
    check_json2(str3)
    print(str2)
    return (str2)
    # else:
    #     pass


# for i in range(5):
# for i in range(1000): 
#     #   a =check("0")
#     a = check2([0,1,2],0)
#     print(a)


# def find(u):
#  o=u
#  for i in range(900):   
#    c =check(o)
#    print(c) 

#  return c


