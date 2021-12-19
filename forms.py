from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class SignUpForm(FlaskForm):
    name = StringField('Customer Name*')
    age = StringField('Enter your age*')
    mobile = StringField('Mobile Number*')
    destination = StringField('Destination*')
    submit = SubmitField('Next')