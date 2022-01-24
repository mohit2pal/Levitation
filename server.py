from flask import Flask, render_template, redirect
from flask import request
from forms import *
from log import * 
from alllot import *
from seat import *
import time
import os

name2 = ""
allot2 = ""
pod_d=""


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
       allot2 = check(pod_d)
       print(allot2)
       print(name2)
       #seat(allot2)
       return redirect("/seat_selection")
    return render_template('index.html', form=form)
 
    
@app.route('/pod_bay_ticket', methods=['GET', 'POST'])
def rticket():
    form = RecSignUpForm()
    if form.is_submitted():
       result= request.form
       rname =request.form['name']
       rage =request.form['age']
       rmobile =request.form['mobile']
       rentry(rname,rage,rmobile)
       return redirect("/thank you")
    return render_template('reciever.html', form=form)


@app.route('/seat_selection', methods=['GET', 'POST'])
def work():
    # global seat_ticket
    # global datatly
    global dataty_len
    # global jsdata
    global pod_d
    
    if request.method == 'POST':
        # jsdata = request.data
        # print(jsdata)
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
            check(pod_d)
        # seats(dataty)
    time.sleep(0.5) 
    return render_template('booking.html')

@app.route('/print_ticket', methods=['GET', 'POST'])
def output():
    namet = name2
    allott = allot2
    return render_template('ticket.html', nameh=namet, alloth=allott)

@app.route('/worker', methods=['GET', 'POST'])
def worker():
    global pod_d
    if request.method == 'POST':
        pod_d = request.get_json()
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

@app.route('/thank you', methods=['GET', 'POST'])
def final():
    time.sleep(0.5)
    return render_template("recthanku.html")

if __name__ == '__main__':
    port = os.environ.get("PORT", 5000)
    app.run(debug=False, host="0.0.0.0", port=port)
