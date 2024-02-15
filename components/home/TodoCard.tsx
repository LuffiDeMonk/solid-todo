import React from 'react'
import CardInputs from './CardInputs'
import CustomEditButton from './CustomEditButton'

type Props = {
    Todo: {
        id: string,
        todo: string
    }
}

export default function TodoCard({ Todo }: Props) {
    return (
        <div className='p-2 border rounded-lg flex items-center justify-between'>
            <h1 className='text-sm'>{Todo.todo}</h1>
            {/* action button to edit and delete products */}
            <div className="flex items-center gap-2">
                <CustomEditButton Todo={Todo} />
                <CardInputs id={Todo.id} />
            </div>
        </div>
    )
}
