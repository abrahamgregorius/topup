import { PropsType } from '@/var/var'
import React from 'react'
import { Badge } from '../ui/badge'

const BadgeNew = (props: PropsType) => {
  return (
    <>
        <Badge className={`
            ${props.type == "success" ? "bg-[#8CF9011F] text-[#D0FD00]" : ""} 
            ${props.type == "danger" ? "bg-[#F630301F] text-[#F63030]" : ""} 
            ${props.type == "warning" ? "bg-[#FDB6001F] text-[#FDB600]" : ""} 
            ${props.className}
            `}>
            {props.children}
        </Badge>
    </>
    )
}

export default BadgeNew