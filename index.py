import json
import datetime

block_timer_array = []
count = 1
default2 = 0

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

def blocker():
    global default2
    timet = sec2()
    default = 0
    if(count == 1):
        for i in range(0,1,-1):
            if(i%90 == 30):
                default2 = i
                break
        for j in range(6):
            block_timer_array.append(default2 - ((j*90)+180000))
    with open('/static/js/block.json', 'r') as f:
       data = json.load(f)
    
    for i in data:
        print(i)
        

blocker()
