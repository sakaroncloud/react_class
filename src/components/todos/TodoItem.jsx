import React from 'react'

export const TodoItem = ({ title, id, completed, onCheckTodo, onInputChange, onDelete }) => {
    const [isEditing, setIsEditing] = React.useState(false)

    return (
        <ul className='flex gap-x-2 items-end'>
            <input type='checkbox'
                id={id + "checkbox"}
                checked={completed}
                onChange={() => onCheckTodo(id, !completed)}
            />

            {isEditing ? <>
                <input type="text" value={title} className='text-xs'
                    onChange={(e) => onInputChange(id, e.target.value)}
                />
                <button onClick={() => setIsEditing(false)} className='w-fit text-xs !py-0.5'>Save</button>
            </> : <>
                <label htmlFor={id + "checkbox"} className='leading-none text-sm'>{title}</label>

                <button onClick={() => setIsEditing(true)} className='w-fit text-xs !py-0.5'>Edit</button>
            </>
            }
            <button onClick={() => onDelete(id)} className='w-fit text-xs !py-0.5'>Delete</button>
        </ul> 
    )
}
