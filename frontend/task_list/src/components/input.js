// Data input component

import React, {useEffect, useState} from "react"


const Input = () => {
    // States to store data
    const [task_name, setName] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');
    const [results, setResults] = useState([]);

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleDate = (event) => {
        setDate(event.target.value);
    };
    const handleDetails = (event) => {
        setDetails(event.target.value)
    };

    const handleAdd = async () => {
        try {
            const response = await fetch('/add-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'name': task_name,
            'date': date, 'details': details}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setResults(data)
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch('/delete-task', {
                method: 'POST',
                hearders: {
                    'Content-Type': 'application/json',
                },
                body: id,
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setResults(data)
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    function getTasks = async () => {
        try {
            const response = await fetch()
        }
    }

    return (
        <div className="data-input-container">
            <input
            type="text"
            placeholder="Task Name"
            value={task_name}
            className="custom-input"
            onChange={handleName}
            />
            <input type="date"
            placeholder="Date"
            value={date}
            onChange={handleDate}
            />
            <input
            type="text"
            placeholder="Details"
            value={details}
            onChange={handleDetails}
            />
            <button onClick={handleAdd}>Add</button>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {results.map((item) => (
                    <tr key={item}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                    <td>
                        <button onClick={() => handleDelete(item[0])}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default Input;
