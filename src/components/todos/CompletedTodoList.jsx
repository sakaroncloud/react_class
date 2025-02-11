import React from 'react'

export const CompletedTodoList = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        {todo.title}
                    </div>
                )
            })}
        </div>
    )
}
