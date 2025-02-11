import React from 'react'
import { AddToDo } from './AddTodo'
import Card from '../common/card'
import { TodoItem } from './TodoItem'
import { initialTodos } from './data'
import { useState } from 'react'
import { CompletedTodoList } from './CompletedTodoList'

export const Todo = () => {
    const [todos, setTodos] = useState(initialTodos)

    const onCheckTodo = (id, completed) => {
        const newTodo = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed
                }
            }
            else {
                return todo
            }
        })
        setTodos(newTodo)
    }

    const onInputChange = (id, title) => {
        const newTodo = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title
                }
            }
            else {
                return todo
            }
        })
        setTodos(newTodo)
    }

    const onDelete = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id)
        setTodos(newTodo)
    }

    const onAddTodo = (title) => {
        const newTodo = {
            title,
            completed: false,
            id: todos.length
        }
        setTodos([...todos, newTodo])
    }


    return (
        <Card
            title={'Todos'}
            description={'Simple todo list'}
        >
            <AddToDo onAddTodo={onAddTodo} />
            {todos.map((todo) => {
                return (
                    <TodoItem key={todo.id}
                        title={todo.title}
                        id={todo.id}
                        completed={todo.completed}
                        onCheckTodo={onCheckTodo}
                        onInputChange={onInputChange}
                        onDelete={onDelete}
                    />
                )
            })}
            <CompletedTodoList
                todos={todos.filter((todo) => todo.completed)}
            />
        </Card>
    )
}
