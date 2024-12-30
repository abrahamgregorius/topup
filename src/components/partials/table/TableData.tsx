import { PropsType } from "@/var/var";

const TableData = (props: PropsType) => {
    return (
        <>
            <td className={`mt-3 py-3 px-5 ${props.leftTable ? "text-left" : "text-center"} ${props.className}`}>
                {props.children}
            </td>
        </>
    );
};

export default TableData;
