import { PropsType } from '@/var/var'


const TableRow = (props: PropsType) => {
  return (
    <>
        <tr className={`bg-[#151617] border-x-0 border-y-4 border-black ${props.className}`}>
            {props.children}
        </tr>
    </>
)
}

export default TableRow