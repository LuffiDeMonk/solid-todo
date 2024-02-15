'use client'

import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { Input } from '../ui/input'
import { PlusIcon } from 'lucide-react'
import { toast } from 'sonner'
import FormButton from './FormButton'


type Props = {
    formAction: (props: any, props2?: any, props3?: any) => Promise<any>
    defaultInput?: string
    defaultId?: string
}

const initialState = {}

export default function CustomForm({ formAction, defaultInput, defaultId }: Props) {

    const [state, serverAction] = useFormState(formAction, initialState)

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message)
        }
        if (state?.error) {
            toast.error(state.error)
        }

    }, [state])

    return (
        <form className='flex gap-2' action={serverAction}>
            <Input placeholder='Add new place' name='todo' defaultValue={defaultInput} className='w-80' />
            <Input type='hidden' defaultValue={defaultId} name='id' />
            <FormButton icon={<PlusIcon size={20} />} />
        </form>
    )
}
