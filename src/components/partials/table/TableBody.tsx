import { PropsType } from '@/var/var'


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