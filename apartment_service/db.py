import psycopg2

conn = psycopg2.connect(database="flask_db",host="postgres",user="postgres",password="yosefha4",port="5432")
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS apartments (
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

cursor.execute('''INSERT INTO apartments (whichAction, userOwnerId ,apType, apCity, apStreet, numOfRooms, parkingNum, moreDesc, builtInMeter, price, availDate, apImages, ownerName, ownerPhone)
VALUES ('מכירה', 'testu2s2erid22owner22', 'דירה', 'תל אביב', 'קינג גורג', 5, 1, 'קומה 3, נוף לים', 170, '2999999', '1/12/2023', ARRAY['abcc','abcb'], 'אורן', '0512345678')
 ''')

conn.commit()
cursor.close()
conn.close()