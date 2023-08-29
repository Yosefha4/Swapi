import psycopg2
from flask import Flask,redirect,request,url_for,jsonify,make_response

app = Flask(__name__)

def db_connection():
    conn = psycopg2.connect(database="flask_db",host="postgres",user="postgres",password="yosefha4",port="5432")
    return conn

@app.route("/")
def index():
    conn = db_connection()
    cur = conn.cursor()
    cur.execute('''SELECT * from apartments''')
    data = cur.fetchall()
    cur.close()
    conn.close()
    return data

@app.route("/create", methods=['POST'])
def create():
    conn = db_connection()
    cur = conn.cursor()
    # Get the inputs
    ap_data = request.json 
    
    whichAct = ap_data.get('whichAction')
    apType = ap_data.get('apType')
    apCity = ap_data.get('apCity')
    apStreet = ap_data.get('apStreet')
    numOfRooms = ap_data.get('numOfRooms')
    moreDesc = ap_data.get('moreDesc')
    builtInMeter = ap_data.get('builtInMeter')
    price = ap_data.get('price')
    availDate = ap_data.get('availDate')
    apImages = ap_data.get('apImages')
    ownerName = ap_data.get('ownerName')
    ownerPhone = ap_data.get('ownerPhone')

    # SQL query with parameter placeholders
    query = '''
    INSERT INTO apartments (whichAction, apType, apCity, apStreet, numOfRooms, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    '''
    try:
        cur.execute(query, (whichAct, apType, apCity, apStreet, numOfRooms, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone))
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
    apType = ap_data.get('apType')
    apCity = ap_data.get('apCity')
    apStreet = ap_data.get('apStreet')
    numOfRooms = ap_data.get('numOfRooms')
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
            UPDATE apartments 
            SET whichAction=%s, apType=%s, apCity=%s, apStreet=%s, numOfRooms=%s, moreDesc=%s, builtInMeter=%s, price=%s, availDate=%s, apImages=%s, ownerName=%s, ownerPhone=%s 
            WHERE id=%s
        ''', (whichAct, apType, apCity, apStreet, numOfRooms, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone, id))
        
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
        
        cur.execute('''DELETE FROM apartments WHERE id=%s''', (id,))  
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

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5002)

#whichAction,apType,apCity,apStreet,numOfRooms,moreDesc,builtInMeter,price,availDate,apImages,ownerName,ownerPhone