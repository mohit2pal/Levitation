from flask import Flask, render_template, redirect
from flask import request
from forms import SignUpForm
from log import * 
from alllot import *
from seat import *
import os

name2 = ""
allot2 = ""
pod_d={-69}
# seat_ticket= ""
# datatly = []

app = Flask(__name__)
app.config['SECRET_KEY'] = 'levetation'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/pod_ticket', methods=['GET', 'POST'])
def index():
    global name2
    global allot2
    global pod_d
    form = SignUpForm()
    if form.is_submitted():
       result= request.form
       name2 =request.form['name']
       age2 =request.form['age']
       mobile2 =request.form['mobile']
       destination2 =request.form['destination']
       entry(name2,age2,mobile2,destination2)
       allot2 = check(pod_d,0)
       print(allot2)
       print(name2)
       #seat(allot2)
       return redirect("/seat_selection")
    return render_template('index.html', form=form)
    
@app.route('/pod_bay_ticket', methods=['GET', 'POST'])
def rticket():
    form = SignUpForm()
    if form.is_submitted():
       result= request.form
       rname =request.form['name']
       rage =request.form['age']
       rmobile =request.form['mobile']
       rentry(rname,rage,rmobile)
    return render_template('reciever.html', form=form)

@app.route('/seat_selection', methods=['GET', 'POST'])
def work():
    # global seat_ticket
    # global datatly
    global pod_d
    if request.method == 'POST':
        # seat_ticket = ""
        dataty = request.get_json()
        # datatly = dataty
        # for i in dataty:
        #     i2 = str(i)
        #     seat_ticket = seat_ticket + "|" + i2 + "|"
        print(dataty)
        # print(datatly)
        # print(seat_ticket)
        print(type(dataty))
        # find(dataty)
        dataty_len = len(dataty)
        dataty_length = dataty_len - 1
        for i in range(dataty_length):
            check(pod_d,1)
        # seats(dataty)
    return render_template('booking.html')

@app.route('/print_ticket', methods=['GET', 'POST'])
def output():
    
    namet = name2
    allott = allot2
    # seat_tickett = seat_ticket
    # print("This is in print_ticket:", datatly)
    return render_template('ticket.html', nameh=namet, alloth=allott)

@app.route('/worker', methods=['GET', 'POST'])
def worker():
    global pod_d
    if request.method == 'POST':
        pod_a = request.get_json()
        for i in pod_a:
            pod_d.add(i)
        print(pod_d)
        print("This is the damaged pods:", pod_d)
    return render_template("worker.html")

@app.route('/damage_submit', methods=['GET', 'POST'])
def submit():
    return render_template("dmg_submit.html")

# @app.route('/log', methods=['GET', 'POST'])
# def log():
#     return render_template("log.html")

@app.route('/log', methods=['GET', 'POST']) 
def log(): 
	with open('log.txt', 'r') as f: 
		return render_template('log.html', text=f.read())

@app.route('/aboutus', methods=['GET', 'POST'])
def aboutus():
        return render_template("aboutus.html")
    
@app.route('/loginfo', methods=['GET', 'POST'])
def inlog():
    if request.method == 'POST':
        print("yes")
    return render_template('waccess.html')

@app.route('/pod_selector', methods=['GET', 'POST'])
def select_pod_selector():
    global pod_d
    if request.method == 'POST':
        select_data = request.get_data()
        select = select_data.decode("utf-8")
        print(select)
        print(type(select))
        select_list = select.split(',')
        print(select_list)
        for x in select_list:
            if(x == 'A'):
                t3 = -1
            elif(x == 'B'):
                t3 = 5
            elif(x == 'C'):
                t3 = 11
            elif(x == 'D'):
                t3 = 17
            elif(x == 'E'):
                t3 = 23
            elif(x == 'F'):
                t3 = 29
            elif(x == 'G'):
                t3 = 35
            elif(x == 'H'):
                t3 = 41
            elif(x == 'I'):
                t3 = 47
            elif(x == 'J'):
                t3 = 53
            elif(x == 'K'):
                t3 = 59
            elif(x == 'L'):
                t3 = 65
            elif(x == 'M'):
                t3 = 71
            for v in range(6):
                # v1 = v+1
                # t3 = x+str(v1)
                t3+=1
                pod_d.add(t3)
        print(pod_d)
        # pod_d.append(select_data)
        # print(pod_d)
    return render_template("pod_selector.html") 

if __name__ == '__main__':
    port = os.environ.get("PORT", 5000)
    app.run(debug=False, host="0.0.0.0", port=port)
