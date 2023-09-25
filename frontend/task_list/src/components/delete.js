import React from 'react'


const Delete = (id) => {
    const handleDelete = async () => {
        try {
            const response = await fetch('/delete-task', {
                method: 'POST',
                hearders: {
                    'Content-Type': 'application/json',
                },
                body: Object.values(id),
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                
            }
        } catch (error) {
            console.error('Error', error);
        }
    };
    return (
        <button onClick={handleDelete}>Delete</button>
    )
};

export default Delete;
