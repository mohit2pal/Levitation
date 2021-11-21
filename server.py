from flask import Flask, render_template, redirect
from flask import request
from forms import SignUpForm
from log import * 
from alllot import *
from seat import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'levetation'

@app.route('/', methods=['GET', 'POST'])
def index():
    form = SignUpForm()
    if form.is_submitted():
        result= request.form
        name2 =request.form['name']
        age2 =request.form['age']
        mobile2 =request.form['mobile']
        destination2 =request.form['destination']
        entry(name2,age2,mobile2,destination2)
        allot2 = allot()
        print(allot2)
        seat(allot2)
        return render_template('output.html', nameh=name2, ageh=age2, destinationh=destination2)
    return render_template('index.html', form=form)
    
if __name__ == '__main__':
    app.run()