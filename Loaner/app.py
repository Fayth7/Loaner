from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'your_database_connection_string'
db = SQLAlchemy(app)


@app.route('/')
def hello_loaner():
    return 'Hello, Loaner!'


if __name__ == "__main__":
    app.run(debug=True)
