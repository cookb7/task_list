"""
Backend file for Task List project.
"""


from flask import Flask, request, jsonify
from database import DatabaseFucntions

app = Flask(__name__)
db = DatabaseFucntions()


class TaskListApp:
    def __init__(self, app) -> None:
        self.app = app
        self.set_routes()
        db.create_table()

    def set_routes(self):
        self.app.add_url_rule('/add-task', 'add-task', self.add_task, methods=['POST'])
        self.app.add_url_rule('/update-task', self.update_task)
        self.app.add_url_rule('/delete-task', 'delete-task', self.delete_task, methods=['POST'])
 
    def add_task(self):
        try:
            data = request.get_json()
            name = data.get('name')
            date = data.get('date')
            details = data.get('details')
            db.insert(name, date, details)
            results = db.select_all()
            return jsonify(results)

        except Exception as e:
            return jsonify({"Error": str(e)}), 400

    def update_task(self):
        pass

    def delete_task(self):
        try:
            data = request.get_data()
            id = data.decode('utf-8')
            db.delete(int(id))
            return db.select_all()
        
        except Exception as e:
            return jsonify({"Error": str(e)}), 400

if __name__ == '__main__':
    task_app = TaskListApp(app)
    app.run(debug=True)