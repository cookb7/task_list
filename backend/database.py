import sqlite3


class DatabaseFucntions:
    def __init__(self):
        self._database = 'taskdatabase.db'
        self._connection = None

    def _create_connection(self):
        try:
            self._connection = sqlite3.connect(self._database)
            return None
        
        except sqlite3.Error as e:
            print(e)
            return None
    
    def _close_connection(self):
        if self._connection:
            self._connection.close()

    def create_table(self):
        self._create_connection()
        cursor = self._connection.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tasks(
                             id INTEGER PRIMARY KEY,
                             task_name TEXT NOT NULL,
                             date DATE,
                             details TEXT NOT NULL
            )""")
        self._close_connection()

    def insert(self, name, date, details):
        self._create_connection()
        cursor = self._connection.cursor()
        sql = """INSERT INTO tasks (task_name, date, details) 
            VALUES (?, ?, ?)"""
        cursor.execute(sql, (name, date, details))
        self._connection.commit()
        self._close_connection()
    
    def select_all(self):
        self._create_connection()
        cursor = self._connection.cursor()
        cursor.execute("""SELECT * FROM tasks""")
        results = cursor.fetchall()
        self._close_connection()
        return results
    
    def delete(self, id):
        self._create_connection()
        cursor = self._connection.cursor()
        print(id)
        print(type(id))
        cursor.execute("""DELETE FROM tasks WHERE id = ?;""", id)
        print('Here')
        self._connection.commit()
        self._close_connection()
    