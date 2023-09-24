import sqlite3

connection = sqlite3.connect('taskdatabase.db')
cursor = connection.cursor()

print(cursor.execute("""SELECT * FROM tasks"""))