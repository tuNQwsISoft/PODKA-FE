import React from "react";
import groupClass from "../../../utils/ClassNameUtil";

const TableRowComponent = ({
    children,
    item,
    rowSelection,
    selectedRows = [],
    setSelectedRows,
    className,
}) => {
    const handleSelectRow = (item, event) => {
        event.stopPropagation();
        const selectedRow = rowSelection.getSelection(item);
        const selectedKey = selectedRow.key;
        if (event.target.checked) {
            if (rowSelection.multiple === true) {
                const selectedList = selectedRows.concat(selectedKey);
                rowSelection.onChange?.(selectedList);
                setSelectedRows(selectedList);
            } else {
                rowSelection.onChange?.(...[selectedKey]);
                setSelectedRows([selectedKey]);
            }
        } else {
            if (rowSelection.multiple === true) {
                const selectedList = selectedRows.filter(
                    (item) => item !== selectedKey,
                );
                rowSelection.onChange?.(selectedList);
                setSelectedRows(selectedList);
            } else {
                rowSelection.onChange?.();
                setSelectedRows([]);
            }
        }
    };
    return (
        <tr className={groupClass("table-body-row", className)}>
            {rowSelection ? (
                <td className="table-body-cell">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedRows?.includes(item.id)}
                        disabled={rowSelection.getSelection(item).disabled}
                        onChange={(event) => handleSelectRow(item, event)}
                    />
                </td>
            ) : null}
            {children}
        </tr>
    );
};

export default TableRowComponent;
