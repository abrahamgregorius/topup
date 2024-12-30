import { PropsType } from '@/var/var'
import React from 'react'

const TableBody = (props: PropsType) => {
  return (
    <>
        <tbody>
            {props.children}
        </tbody>
    </>

)
}

export default TableBody