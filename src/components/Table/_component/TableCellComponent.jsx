import React from "react";
import groupClass from "../../../utils/ClassNameUtil";

const TableCellComponent = ({ children, colSpan = 1, required }) => {
    return (
        <td
            className="table-body-cell"
            colSpan={colSpan}
        >
            <div
                className={groupClass("flex flex-nowrap gap-1", {
                    "required-field": required,
                })}
            >
                {children}
            </div>
        </td>
    );
};

export default TableCellComponent;
