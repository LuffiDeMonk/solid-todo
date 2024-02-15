import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { SquarePen } from 'lucide-react'
import CustomButton from './CustomButton'
import CustomForm from './CustomForm'
import { editTodo } from '@/app/action'

type Props = {
    Todo: {
        id: string,
        todo: string
    }
}

export default function CustomEditButton({ Todo }: Props) {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <CustomButton size='icon' icon={<SquarePen size={18} />} />
                </PopoverTrigger>
                <PopoverContent className='w-96'>
                    <label className='text-xs'>Edit your place</label>
                    <CustomForm formAction={editTodo} defaultInput={Todo.todo} defaultId={Todo.id} />
                </PopoverContent>
            </Popover>
        </>
    )
}