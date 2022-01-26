import json
import datetime
canter = 0

block_timer_array = []
count = 1
default2 = 0
depa = 0

def variedit():
    global canter
    canter = 0

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

def blockermat():
    global canter
    if(canter != 1):
        global depa
        global count
        global default2
        timet = sec2()
        print(timet)
        default = 0
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
            dicto = {"status": 0}
            json_object = json.dumps(dicto, indent = 1)
            with open("./static/js/theblocker.json", "w") as outfile:
               outfile.write(json_object)
            print("Blocked")
        elif(timet >block_timer_array[o2] and seat == 28):
            dicto = {"status": 1}
            json_object = json.dumps(dicto, indent = 1)
            with open("./static/js/theblocker.json", "w") as outfile:
              outfile.write(json_object)
            block_timer_array[o2] = default2 + (o*60)+ (180*count) + (360*depa)
            depa+=1
            count+=1
            print("Allowed")
        else:
            dicto = {"status": 1}
            json_object = json.dumps(dicto, indent = 1)
            with open("./static/js/theblocker.json", "w") as outfile:
               outfile.write(json_object)
            print("Allowed")
        
        

# for i in range(250):
#     blocker()
