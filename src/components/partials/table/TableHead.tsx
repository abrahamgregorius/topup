import { PropsType } from "@/var/var";

const TableHead = (props: PropsType) => {
    return (
        <>
            <thead className="">
                <tr className={`bg-[#1D1F21] ${props.className}`}>
                    {props.children}
                </tr>
            </thead>
        </>
    );
};

export default TableHead;
