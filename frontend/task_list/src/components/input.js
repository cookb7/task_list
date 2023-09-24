// Data input component

import React, {useState} from "react"


const Input = () => {
    // States to store data
    const [task_name, setName] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');

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
                console.log(data.results)
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

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
        </div>

        

    )
};

export default Input;
