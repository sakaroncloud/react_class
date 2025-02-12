import React from 'react'

export const CompletedTodoList = ({ todos }) => {
    return (
        <div>
            <h1>This is completed Todos</h1>
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
