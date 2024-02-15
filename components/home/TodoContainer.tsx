import React from 'react'
import TodoCard from './TodoCard'

type Todo = {
    id: string,
    todo: string
}

const fetchTodos = async () => {
    const response = await fetch('https://65cde0e8c715428e8b3f59ec.mockapi.io/api/v1/todos', { next: { revalidate: 10 } })
    if (!response.ok) {
        throw new Error('Error in fetching data')
    }
    return response.json()
}


export default async function TodoContainer() {
    const Todos: Todo[] = await fetchTodos()
    return (
        <div className='w-full h-72 space-y-2 overflow-y-auto'>
            {
                Todos.map(todo => (
                    <React.Fragment key={todo.id}>
                        <TodoCard Todo={todo} />
                    </React.Fragment>
                ))
            }
        </div>
    )
}
