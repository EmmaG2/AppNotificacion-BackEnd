import pymysql

def dataBase(titulo, mensaje):
    mysql = pymysql.connect(
        host="localhost",
        user="root",
        passwd="",
        db="backend"
    )
    try:
        sql = (f"INSERT INTO motivacion VALUES ('', '{titulo}', '{mensaje}')")
        cursor = mysql.cursor()
        cursor.execute(sql)
    except Exception as e:
        print(f"Error DataBase: {e}")
    
    else:
        mysql.commit()
        print("Listo")

dataBase("a", "a")