import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            content: 'Zrobic pranie',
            done: false
        },
        {
            id: 2,
            content: 'Zrobic obiad',
            done: true
        },
        {
            id: 3,
            content: 'Wyjsc z psem',
            done: false
        }
    ])

    const markComplete = (e) => {
        if(e.target.checked){
            console.log(e.target)
        }
    }

    return (
        taskList.map((task) => (
            <TodoItem 
            key={task.id} 
            content={task.content} 
            done={task.done}
            markComplete={markComplete}/>
        ))

    )
}

export default TodoList

