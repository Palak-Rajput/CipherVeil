# .\env\Scripts\activate.ps1
# python .\app.py

from flask import*
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder= 'Templates')
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///cipherveil.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class  Text(db.Model):
    
    sno = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(500), nullable=False)
    filename = db.Column(db.String(50), nullable=False)

class  Image(db.Model):

    sno = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(500), nullable=False)
    filename = db.Column(db.String(50), nullable=False)

class  Video(db.Model):
    

    sno = db.Column(db.Integer, primary_key=True)
    frame_no = db.Column(db.Integer, nullable=False)
    data = db.Column(db.String(500), nullable=False)
    key = db.Column(db.Integer, nullable=False)

# class  Cover_Files(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     cover_text_name = db.Column(db.String(255), nullable=False)
#     cover_text_content = db.Column(db.LargeBinary)


# def store_file(filename):
#     with open(filename, 'rb') as file:
#         content = file.read()
# store_file("cover_text.txt")

with app.app_context():
    db.create_all()

    def __repr__(self) -> str:
        return f"{self.data} - {self.filename}"
      

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/TIT')
def text():
    return render_template('text.html')

@app.route('/TII')
def image():
    return render_template('image.html')

@app.route('/TIV')
def video():
    return render_template('video.html')


@app.route('/Text_Encode')
def text_encode():
    return render_template('encode_text.html')

@app.route('/Text_Decode')
def text_decode():
    return render_template('decode_text.html')

@app.route('/Text_Back')
def text_back():
    return render_template('text.html')


@app.route('/Image_Encode')
def image_encode():
    return render_template('encode_image.html')

@app.route('/Image_Decode')
def image_decode():
    return render_template('decode_image.html')

@app.route('/Image_Back')
def image_back():
    return render_template('image.html')


@app.route('/Video_Encode')
def video_encode():
    return render_template('encode_video.html')

@app.route('/Video_Decode')
def video_decode():
    return render_template('decode_video.html')

@app.route('/Video_Back')
def video_back():
    return render_template('video.html')


@app.route('/text_encode_details', methods=['GET', 'POST'])
def text_encode_details():
    if request.method == 'POST':
        # print(request.form['text_data'])
        text_data = request.form['text_data']
        text_filename = request.form['text_filename']
        
    text_encode = Text(data=text_data, filename=text_filename)
    db.session.add(text_encode)
    db.session.commit()
    EncodedText = Text.query.all()
    return render_template('encode_text.html', EncodedText=EncodedText)

@app.route('/image_encode_details', methods=['GET', 'POST'])
def image_encode_details():
    if request.method == 'POST':
        image_data = request.form['image_data']
        image_filename = request.form['image_filename']
        
    image_encode = Image(data=image_data, filename=image_filename)
    db.session.add(image_encode)
    db.session.commit()
    EncodedImage = Image.query.all()
    return render_template('encode_image.html', EncodedImage=EncodedImage)

@app.route('/video_encode_details', methods=['GET', 'POST'])
def video_encode_details():
    if request.method == 'POST':
        video_frame = request.form['video_frame']
        video_data = request.form['video_data']
        video_key = request.form['video_key']
        
    video_encode = Video(frame_no=video_frame, data=video_data, key=video_key)
    db.session.add(video_encode)
    db.session.commit()
    EncodedVideo = Video.query.all()
    return render_template('encode_video.html', EncodedVideo=EncodedVideo)


if  __name__ == '__main__':
    app.run(debug=True,  port=7000)