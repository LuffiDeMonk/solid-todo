'use client'

import React, { useEffect } from 'react'
import { Trash } from 'lucide-react'
import { deletePlace } from '@/app/action'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import FormButton from './FormButton'
import { Input } from '../ui/input'

type Props = {
    id: string
}

const initialState: any = {

}

export default function CardInputs({ id }: Props) {
    const [state, formAction] = useFormState(deletePlace, initialState)

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message)
        }
        if (state?.error) {
            toast.error(state.error)
        }

    }, [state])

    return (
        <form action={formAction}>
            <Input type='hidden' name='id' defaultValue={id} />
            <FormButton icon={<Trash size={18} />} />
        </form>
    )
}