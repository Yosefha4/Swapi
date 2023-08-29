import psycopg2

conn = psycopg2.connect(database="flask_db",host="postgres",user="postgres",password="yosefha4",port="5432")
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS apartments(id serial PRIMARY KEY,whichAction varchar(50), apType varchar(50),apCity varchar(50), apStreet varchar(50), numOfRooms integer, moreDesc varchar(100), builtInMeter integer, price varchar(50), availDate varchar(50), apImages varchar[], ownerName varchar(50), ownerPhone varchar(50))''')

cursor.execute('''INSERT INTO apartments (whichAction,apType,apCity,apStreet,numOfRooms,moreDesc,builtInMeter,price,availDate,apImages,ownerName,ownerPhone) VALUES ('Rent','House','Netivot','Smilo St',4,'Excellent house, well equipped, quiet neighbors',185,'3,500₪','10/10/2023',ARRAY ['firstHosuseImgURL','secondHouseImgURL'],'Yosef Tash','0512345678') ''')

conn.commit()
cursor.close()
conn.close()