import { PropsType } from "@/var/var";
import React from "react";

const TableHeader = (props: PropsType) => {
    return (
        <>
            <th className={`py-4 px-5 text-lg font-semibold ${props.className}`}>{props.children}</th>
        </>
    );
};

export default TableHeader;
