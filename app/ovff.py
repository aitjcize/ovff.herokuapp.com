import os

from StringIO import StringIO
from flask import Flask, request, render_template, jsonify
from pyovff import ovff_decode, ovff_encode

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/convert.json", methods=["POST"])
def convert():
    result = 'Error'

    try:
        output = StringIO()
        input = StringIO(request.form["text"].encode('utf8'))

        if request.form["op"] == "encode":
            ovff_encode(input, output)
        elif request.form["op"] == "decode":
            ovff_decode(input, output)

        result = output.getvalue()
    except:
        pass

    return jsonify({"result": result})


if __name__ == "__main__":
    app.debug = True
    app.run()
