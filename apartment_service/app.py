import psycopg2
from flask import Flask,redirect,request,url_for,jsonify,make_response,Response
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

def db_connection():
    conn = psycopg2.connect(database="flask_db",host="postgres",user="postgres",password="yosefha4",port="5432")
    cur = conn.cursor()
    cur.execute('''CREATE TABLE IF NOT EXISTS post_apart (
                id serial PRIMARY KEY,
                whichAction varchar(50),
                userOwnerId varchar(400),
                apType varchar(50),
                apCity varchar(50),
                apStreet varchar(50),
                numOfRooms integer,
                parkingNum integer,
                moreDesc varchar(100),
                builtInMeter integer,
                price varchar(50),
                availDate varchar(50),
                apImages varchar[],
                ownerName varchar(50),
                ownerPhone varchar(50)
                );
            ''')    

    cur.execute('''INSERT INTO post_apart (whichAction, userOwnerId ,apType, apCity, apStreet, numOfRooms, parkingNum, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone)
    VALUES ('מכירה', 'testu2s2erid22owner22', 'דירה', 'תל אביב', 'קינג גורג', 5, 1, 'קומה 3, נוף לים', 170, '2999999', '1/12/2023', ARRAY['abcc','abcb'], 'אורן', '0512345678')
    ''')
    return conn

@app.route("/")
def index():
    conn = db_connection()
    cur = conn.cursor()
    cur.execute('''SELECT * from post_apart''')
    data = cur.fetchall()
    cur.close()
    conn.close()

     # Ensure the data is encoded as UTF-8
    data_encoded = []
    for row in data:
        row_encoded = [str(cell, 'utf-8') if isinstance(cell, bytes) else cell for cell in row]
        data_encoded.append(row_encoded)
  

    response = jsonify(data_encoded)
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    return response

@app.route("/create", methods=['POST'])
def create():
    conn = db_connection()
    cur = conn.cursor()
    # Get the inputs
    ap_data = request.json 
    
    whichAct = ap_data.get('whichAction')
    userOwnerId = ap_data.get('userOwnerId')
    apType = ap_data.get('apType')
    apCity = ap_data.get('apCity')
    apStreet = ap_data.get('apStreet')
    numOfRooms = ap_data.get('numOfRooms')
    parkingNum = ap_data.get('parkingNum')
    moreDesc = ap_data.get('moreDesc')
    builtInMeter = ap_data.get('builtInMeter')
    price = ap_data.get('price')
    availDate = ap_data.get('availDate')
    apImages = ap_data.get('apImages')
    ownerName = ap_data.get('ownerName')
    ownerPhone = ap_data.get('ownerPhone')

    # SQL query with parameter placeholders
    query = '''
    INSERT INTO post_apart (whichAction, userOwnerId ,apType, apCity, apStreet, numOfRooms, parkingNum, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    '''
    try:
        cur.execute(query, (whichAct, userOwnerId, apType, apCity, apStreet, numOfRooms, parkingNum, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone))
        conn.commit()
        cur.close()
        conn.close()
        response_data = {"message": "Apartment listing created successfully"}
        status_code = 201  # 201 Created
    except Exception as e:
        conn.rollback()
        response_data = {"message": "Error creating apartment listing", "error": str(e)}
        status_code = 500  # 500 Internal Server Error

    response = make_response(jsonify(response_data), status_code)
    return response

@app.route("/update", methods=['POST'])
def update():
    conn = db_connection()
    cur = conn.cursor()
    # Get the inputs
    ap_data = request.json 
    
    # Get the values
    whichAct = ap_data.get('whichAction')
    userOwnerId = ap_data.get('userOwnerId')
    apType = ap_data.get('apType')
    apCity = ap_data.get('apCity')
    apStreet = ap_data.get('apStreet')
    numOfRooms = ap_data.get('numOfRooms')
    parkingNum = ap_data.get('parkingNum')
    moreDesc = ap_data.get('moreDesc')
    builtInMeter = ap_data.get('builtInMeter')
    price = ap_data.get('price')
    availDate = ap_data.get('availDate')
    apImages = ap_data.get('apImages')
    ownerName = ap_data.get('ownerName')
    ownerPhone = ap_data.get('ownerPhone')
    id = ap_data.get('id')

    try:
        cur.execute('''
            UPDATE post_apart 
            SET whichAction=%s, userOwnerId=%s ,apType=%s, apCity=%s, apStreet=%s, numOfRooms=%s, parkingNum=%s, moreDesc=%s, builtInMeter=%s, price=%s, availDate=%s, apImages=%s, ownerName=%s, ownerPhone=%s 
            WHERE id=%s
        ''', (whichAct, userOwnerId, apType, apCity, apStreet, numOfRooms, parkingNum, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone, id))
        
        conn.commit()
        cur.close()
        conn.close()
        
        response_data = {"message": "Apartment listing updated successfully"}
        status_code = 200  # 200 OK
    except Exception as e:
        conn.rollback()
        response_data = {"message": "Error updating apartment listing", "error": str(e)}
        status_code = 500  # 500 Internal Server Error

    response = make_response(jsonify(response_data), status_code)
    return response

    
 
@app.route("/delete", methods=['DELETE'])
def delete():
    conn = db_connection()
    cur = conn.cursor()
    
    try:
        ap_data = request.json  
        id = ap_data.get("id")
        
        cur.execute('''DELETE FROM post_apart WHERE id=%s''', (id,))  
        conn.commit()
        cur.close()
        conn.close()
        
        response_data = {"message": "Apartment listing deleted successfully"}
        status_code = 200  # 200 OK
    except Exception as e:
        conn.rollback()
        response_data = {"message": "Error deleting apartment listing", "error": str(e)}
        status_code = 500  # 500 Internal Server Error

    response = make_response(jsonify(response_data), status_code)
    return response

@app.route("/newPost", methods=['GET'])
def testPost():
    tempPost = {
        "message":"Hello Test Func Auth"
    }
    return jsonify(tempPost)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5002)

#whichAction,apType,apCity,apStreet,numOfRooms,moreDesc,builtInMeter,price,availDate,apImages,ownerName,ownerPhone
