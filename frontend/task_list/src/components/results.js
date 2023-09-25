import React from "react"
import Delete from "./delete"

function TaskList({results}) {
    return (
        <div>
        <p>Tasks</p>
                    <div>
                        <ul>
                            {results.map((item, results) => (<li key={results}>{item}<Delete id={item[0]}/></li>))}
                            
                        </ul>
                    </div>
        </div>
    )
};

export default TaskList;
