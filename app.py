from flask import Flask, render_template,request, send_from_directory

app = Flask(__name__)

@app.route('/robots.txt')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

@app.route('/', methods=['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/profile', methods=['GET','POST'])
def temp():
    return render_template('profile.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
