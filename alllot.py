
#Paltform counter = 13
#Platform pod alotment counter = 6 each
#Seat counter = 28 each


import datetime
import json


seat_counter = 29
pod_bay_counter = 6
platform_counter = 12
time = 0
time_rec = 0
time_rechr = 0
time_hourrecd = 0
pod_rec = ""
#pod_d = 0
pod_changed_count = 0

def check_json(t):
    global pod_rec
    global pod_changed_count
    if(t != pod_rec):
        dicto = {"change": 'true'}
        json_object = json.dumps(dicto, indent = 1)
        with open("./static/js/change.json", "w") as outfile:
           outfile.write(json_object)
        pod_changed_count+=1
    else:
        dicto = {"change": 'false'}
        json_object = json.dumps(dicto, indent = 1)
        with open("./static/js/change.json", "w") as outfile:
            outfile.write(json_object)
    pod_rec = t

    
def check(l):
    dmg = []
    # dmg = l.split()
    for j in l:
        dmg_string = ""
        j+=1
        dmg_string = dmg_string + str(chr(int(j/6)+65))
        dmg_string = dmg_string + str(j%6)
        dmg.append(dmg_string)
    print("The processed dmaged pods are:", dmg)
    pid = allot()
    pidd = pid[:2]
    for i in dmg:
      while(pidd == i):
         pid = allot()
         pidd = pid[:2]
    check_json(pidd)
    return pidd
       
        
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

def differ():
    global pod_changed_count
    time_differ = counth()
    pod_differ = pod_changed_count
    
    pod_changed = pod_differ - time_differ
    if(pod_changed < 0):
        pod_changed_count = -1
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
    

def allot():
    global seat_counter
    global pod_bay_counter
    global platform_counter
    global pod_dmg
    timeal = differ()
    print("Timeal:", timeal)
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

    #if (pod_d = A1):

        
    

    platform_change = 12-platform_counter
    platform_ascii= platform_change + 65
    platform = chr(platform_ascii)
    pod_change = 5-pod_bay_counter
    pod_bay = pod_change +1
    pod = str(pod_bay)
    seat = str(seat_counter)
    # str3 = platform + pod
    str2 = platform + pod + " " + seat
    # check_json(str3)
    
    return (str2)



# for i in range(100): 
#   a =check("0")
#   print(a)


# def find(u):
#  o=u
#  for i in range(900):   
#    c =check(o)
#    print(c) 

#  return c


