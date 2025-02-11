import React from 'react'
import styles from "./todos.module.css"

export const AddToDo = ({ onAddTodo }) => {
    const [title, setTitle] = React.useState('')
    return (
        <div className={styles.addTodoContainer}>
            <input
                onChange={(e) => setTitle(e.target.value)}
                type='text' placeholder='Add todo' className={styles.input} />
            <button
                onClick={() => onAddTodo(title)}
                className={styles.button}>Add</button>
        </div>
    )
}
