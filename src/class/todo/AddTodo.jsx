import React from 'react'
import styles from './todo.module.css'

export const AddTodo = ({ onAdd }) => {
    const [value, setValue] = React.useState('')
    return (
        <div>
            <input type="text" className={styles.input}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={() => onAdd(value)}
                className={styles.button}
            >Add</button>
        </div>
    )
}
