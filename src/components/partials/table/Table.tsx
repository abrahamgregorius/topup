import { PropsType } from '@/var/var'


const Table = (props: PropsType) => {
  return (
    <>
        <div className={`w-full mt-7 overflow-x-scroll sm:overflow-auto ${props.className}`}>
            <table className="w-full">
                {props.children}
            </table>
        </div>
    </>
  )
}

export default Table