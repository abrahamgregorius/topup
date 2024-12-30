import { PropsType } from "@/var/var";
import React from "react";

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
