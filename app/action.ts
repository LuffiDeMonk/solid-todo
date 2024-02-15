'use server'

import { revalidatePath } from "next/cache"

export const addNewPlace = async (prevState: any, formData: FormData) => {
    'use server'
    const todo = formData.get('todo')?.toString()
    if (todo?.length === 0) {
        return { error: "Field should not be empty" }
    }
    try {
        await fetch('https://65cde0e8c715428e8b3f59ec.mockapi.io/api/v1/todos', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                todo: todo
            })
        })
        revalidatePath('/')
        return { message: "Place added successfully" }
    } catch (error) {
        console.log(error)
        return { error: 'Error while adding place' }
    }
}

export const editTodo = async (prevState: any, formData: FormData) => {
    'use server'
    const todo = formData.get('todo')
    const id = formData.get('id')

    try {
        await fetch(`https://65cde0e8c715428e8b3f59ec.mockapi.io/api/v1/todos/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                todo: todo
            })
        })
        revalidatePath('/')
        return { message: "Place edited successfully" }
    } catch (error) {
        console.log(error)
        return { error: "Error occured editing place" }
    }
}

export const deletePlace = async (prevState: any, formData: FormData) => {
    'use server'
    const todoId = formData.get('id')
    try {
        await fetch(`https://65cde0e8c715428e8b3f59ec.mockapi.io/api/v1/todos/${todoId}`, {
            method: "DELETE",
        })
        revalidatePath('/')
        return { message: 'Place deleted successfully' }
    } catch (error) {
        console.log(error)
        return { error: "Error occured while deleting place" }
    }
}
