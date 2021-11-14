from flask import Flask, render_template, redirect
from flask import request
from forms import SignUpForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'levetation'

@app.route('/', methods=['GET', 'POST'])
def index():
    form = SignUpForm()
    return render_template('index.html', form=form)
    
if __name__ == '__main__':
    app.run()