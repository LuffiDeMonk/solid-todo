import React from 'react'
import TodoContainer from './TodoContainer'
import CustomForm from './CustomForm'
import { addNewPlace } from '@/app/action'

export default function Container() {

    return (
        <div className='flex min-h-screen items-center justify-center'>
            {/* form and user container */}
            <div className="h-96 w-96 border rounded-lg p-2 flex flex-col gap-5">
                <CustomForm formAction={addNewPlace} />
                <TodoContainer />
            </div>
        </div>
    )
}
