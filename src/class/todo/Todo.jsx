import { useState } from 'react'
import { AddTodo } from './AddTodo'
import { CompletedTodoList } from './CompletedTodoList'
import { TodoItem } from './TodoItem'
export const Todo = () => {
    const [todos, setTodos] = useState([])

    const onAdd = (title) => {
        setTodos([...todos, {
            id: todos.length,
            title,
            isCompleted: false
        }])
    }

    const onDelete = (id) => {
        const newTodos = todos.filter((item) => item.id !== id)
        setTodos(newTodos)
    }

    const onCheckedChange = (id) => {
        const newTodos = todos.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }
            else {
                return item
            }
        })

        setTodos(newTodos)
    }

    const onEdit = (id, title) => {
        const newTodos = todos.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    title
                }
            }
            else {
                return item
            }
        })

        setTodos(newTodos)
    }


    const completedTodos = todos.filter((item) => item.isCompleted)

    return (
        <div className='space-y-4'>
            {/* Input Fields */}

            <AddTodo onAdd={onAdd} />

            {/* Todo List */}

            <div>
                {
                    todos?.map((todo, index) => {
                        return <TodoItem
                            key={index}
                            title={todo.title}
                            id={index}
                            isCompleted={todo.isCompleted}
                            onDelete={onDelete}
                            onCheckedChange={onCheckedChange}
                            onEdit={onEdit}
                        />
                    })
                }
            </div>

            <CompletedTodoList todos={completedTodos} />

        </div>
    )
}
