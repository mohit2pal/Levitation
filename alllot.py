def allot():
    import datetime
    now=datetime.datetime.now()
    time=now.strftime("%H:%M")
    if(time>'20:40' and time<'20:44'):
        a='A1'
        return(a)
    elif(time>'20:49' and time<'20:57'):
        a='A2'
        return(a)
    else:
        print("ok")

