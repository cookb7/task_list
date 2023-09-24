"""
Backend file for Task List project.
"""


from flask import Flask, request, jsonify
import json
import sqlite3

app = Flask(__name__)


class TaskListApp:
    def __init__(self, app) -> None:
        self.app = app
        connection = sqlite3.connect('taskdatabase.db')
        cursor = connection.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tasks(
                             id INTEGER PRIMARY KEY,
                             task_name TEXT NOT NULL,
                             date DATE,
                             details TEXT NOT NULL
            )""")
        connection.commit()
        self.set_routes()

    def set_routes(self):
        self.app.add_url_rule('/add-task', 'add-task', self.add_task, methods=['POST'])
        self.app.add_url_rule('/update-task', self.update_task)
        self.app.add_url_rule('/delete-task', self.delete_task)
 
    def add_task(self):
        try:
            data = request.get_json()
            name = data.get('name')
            date = data.get('date')
            details = data.get('details')
            con = sqlite3.connect('taskdatabase.db')
            cursor = con.cursor()
            sql = """INSERT INTO tasks (task_name, date, details) 
            VALUES (?, ?, ?)"""
            cursor.execute(sql, (name, date, details))
            con.commit()
            return jsonify({'results': 'Done'})

        except Exception as e:
            return jsonify({"Error": str(e)}), 400

    def update_task(self):
        pass

    def delete_task(self):
        pass
    

if __name__ == '__main__':
    task_app = TaskListApp(app)
    app.run(debug=True)