def allot():
    import datetime
    now=datetime.datetime.now()
    time=now.strftime("%H:%M")
    if(time>'00:20' and time<'00:33'):
        a='A1'
        return(a)
    elif(time>'00:50' and time<'00:57'):
        a='A2'
        return(a)
    else:
        print("ok")

