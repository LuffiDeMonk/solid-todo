import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

type Props = {
    size: 'icon' | 'default',
    icon: React.ReactNode,
    handleClick?: (data: any) => Promise<any>
}

export default function CustomButton({ size, icon, handleClick }: Props) {
    return (
        <Button size={size} onClick={handleClick}>
            {icon}
        </Button>
    )
}