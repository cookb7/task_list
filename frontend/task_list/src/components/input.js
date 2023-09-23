// Data input component

import React, {useState} from "react"


const Input = () => {
    // States to store data
    const [task_name, setName] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');

    const handleInput = (event) => {
        setName(event.target.value);
        setDate(event.target.value);
        setDetails(event.target.value);
    };

    const handleAdd = async () => {
        try {
            const response = await fetch('/add-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task_name),
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
            onChange={handleInput}
            />
            <button onClick={handleAdd}>Add</button>
        </div>

        

    )
};

export default Input;
