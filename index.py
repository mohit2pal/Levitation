import json
import datetime
canter = 0                  #Stores the amount of time index.py has ran.

block_timer_array = []      #To store the criticl time for each pod in a platform 
count = 1                   #Variable used to add 3 minutes to the calculation, Booking start time
default2 = 0                #It stores the critical value of the next to be alloted pod 
depa = 0                    #Variable used to add 6 minutes to the calculation, departure time
isAllowed = -1              #isAllowed shows where the blocker notification should be allowed or not, initialize at -1, allowed at 1 and bloacked at 0
o2 = -1                     #processed value of the pod to be alloted

def variedit():                 #Updates the canter depending upon allot`s run time.
    global canter
    canter = 0

def sec2():                         #Calculate the current time 
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

def blockermat():       
    global canter
    global o2
    global isAllowed
    if(canter != 1):
        global depa
        global count
        global default2
        timet = sec2()      #Stores the current time
        print(timet)
        default = 0         #Initialize the default time.
        if(count == 1):
            default = timet
            i = default
            while(1 != 0):
                if(i%90 == 30):
                    default2 = i
                    break
                i+=1
            print("default2",default2)
            for j in range(6):
                block_timer_array.append(default2 - ((j*90)+180000))
        print(block_timer_array)
        with open('static/js/block.json', 'r') as f:
           data = json.load(f)
        o = data['pod']
        o2 =o-1
        seat = data['seats']
        canter = 1
        if(timet < block_timer_array[o2] and seat == 28):
            remain_timer = block_timer_array[o2] - timet        #Shows the time to be shown on the blocker notification
            print(remain_timer)
            isAllowed = 0
            dicto = {"status": 0, "timer": remain_timer}
            json_object = json.dumps(dicto, indent = 1)
            with open("./static/js/theblocker.json", "w") as outfile:
               outfile.write(json_object)
            print("Blocked")
        elif(timet >block_timer_array[o2] and seat == 28):
            isAllowed = 1
            dicto = {"status": 1}
            json_object = json.dumps(dicto, indent = 1)
            with open("./static/js/theblocker.json", "w") as outfile:
              outfile.write(json_object)
            block_timer_array[o2] = default2 + (o*60)+ (180*count) + (360*depa)
            depa+=1
            count+=1
            print("Allowed")
        else:
            isAllowed = 1
            dicto = {"status": 1}
            json_object = json.dumps(dicto, indent = 1)
            with open("./static/js/theblocker.json", "w") as outfile:
               outfile.write(json_object)
            print("Allowed")
    else:
        timet = sec2()
        new_remain_timer = block_timer_array[o2] - timet
        if(new_remain_timer < 0):
            isAllowed = 1
        dicto = {"status": isAllowed, "timer": new_remain_timer}
        json_object = json.dumps(dicto, indent = 1)
        with open("./static/js/theblocker.json", "w") as outfile:
            outfile.write(json_object)
        
        
        

# for i in range(250):
#     blocker()
