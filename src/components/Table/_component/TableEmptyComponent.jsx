import React from "react";
import TableRowComponent from "./TableRowComponent";
import TableCellComponent from "./TableCellComponent";
import { IconAllInbox } from "../../../icons";

const TableEmptyComponent = ({ colSpan }) => {
    return (
        <TableRowComponent>
            <TableCellComponent colSpan={colSpan}>
                <div className="w-full flex items-center justify-center gap-2.5">
                    <IconAllInbox className="h-6 w-6 fill-slate-500" />
                    <p className="text-large text-slate-500">
                        No available data
                    </p>
                </div>
            </TableCellComponent>
        </TableRowComponent>
    );
};

export default TableEmptyComponent;
