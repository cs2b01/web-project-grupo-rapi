from flask import Flask, render_template, session, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index(1).html')
@app.route("/login/")
def login():
    return render_template('login.html')

if __name__ == "__main__":
    app.run()
