'use client'

import React from 'react'
import CustomButton from './CustomButton'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

type Props = {
    icon: React.ReactNode
}

export default function FormButton({ icon }: Props) {
    const { pending } = useFormStatus()
    return (
        <CustomButton size='icon' icon={!pending ? icon : <Loader2 size={18} className="animate-spin" />} />

    )
}