from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class SignUpForm(FlaskForm):
    name = StringField('Customer Name')
    age = StringField('Enter your age')
    mobile = StringField('Mobile Number')
    destination = StringField('Destination')
    seat = StringField('Enter the seat you prefer')
    submit = SubmitField('Next')