import React, { useState } from "react";
import { IconTune } from "../../../icons";
import SelectMultipleComponent from "../../Select/SelectMultipleComponent";
import { getType } from "../../../utils/TypeUtil";
import PaginationComponent from "../../Pagination/PaginationComponent";
import groupClass from "../../../utils/ClassNameUtil";
import { useLocation } from "react-router-dom";
import { formatData } from "../../../utils/FormatUtil";
import TableRowComponent from "./TableRowComponent";
import TableCellComponent from "./TableCellComponent";
import TableEmptyComponent from "./TableEmptyComponent";

const TableView = ({
    columns = [],
    customs = [],
    data = [],
    renderKey = "name",
    columnKey = "id",
    pagination = false,
    totalRecord = 0,
    onPageChange,
    rowSelection,
    toggleable = true,
    keyExtractor,
}) => {
    const location = useLocation();
    const [hiddenColumns, setHiddenColumns] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const displayedColumns = columns.filter(
        (column) => !hiddenColumns.includes(column[columnKey]),
    );
    const getCheckAllProps = () => {
        const rowList = data.map((item) => rowSelection.getSelection(item));
        const selectableRows = rowList.filter((row) => !row.disabled);
        if (selectableRows.length === 0) return false;
        return selectableRows.length === selectedRows.length;
    };
    const handleSelectAll = (event) => {
        const rowList = data.map((item) => rowSelection.getSelection(item));
        const selectableRows = rowList.filter((row) => !row.disabled);
        if (event.target.checked) {
            const selectedList = selectableRows.map((row) => row.key);
            rowSelection.onChange?.(selectedList);
            setSelectedRows(selectedList);
        } else {
            rowSelection.onChange?.([]);
            setSelectedRows([]);
        }
    };
    const handleToggleColumn = (column) => {
        setHiddenColumns((prev) => {
            if (prev.includes(column[columnKey]))
                return prev.filter((element) => element !== column[columnKey]);

            return prev.concat(column[columnKey]);
        });
    };
    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table className="table text-left">
                    <thead className="table-header">
                        <tr className="table-header-row">
                            {rowSelection ? (
                                <th className="table-header-cell">
                                    <input
                                        name="select-all"
                                        type="checkbox"
                                        className={groupClass("checkbox", {
                                            hidden:
                                                rowSelection.multiple !== true,
                                        })}
                                        checked={getCheckAllProps()}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                            ) : null}
                            {displayedColumns.map((column) => (
                                <th
                                    key={column[columnKey]}
                                    className="table-header-cell text-nowrap"
                                >
                                    {column[renderKey]}
                                </th>
                            ))}
                            {toggleable ? (
                                <th className="table-header-cell table-header-toggle">
                                    <SelectMultipleComponent
                                        icon={
                                            <IconTune className="h-[1.125rem] w-[1.125rem] fill-white" />
                                        }
                                        iconOnly
                                        className="table-select-columns"
                                        options={columns.filter(
                                            (column) => column.except !== true,
                                        )}
                                        renderKey={renderKey}
                                        valueKey={columnKey}
                                        defaultSelect={columns.map(
                                            (column) => column[columnKey],
                                        )}
                                        onSelect={handleToggleColumn}
                                    />
                                </th>
                            ) : null}
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {data.map((item, index) => (
                            <TableRowComponent
                                key={keyExtractor?.({ item })}
                                item={item}
                                rowSelection={rowSelection}
                                selectedRows={selectedRows}
                                setSelectedRows={setSelectedRows}
                                className={groupClass({
                                    "blink blink-new":
                                        index === 0 &&
                                        Date.now() -
                                            Number(location.state?.createdAt) <=
                                            5000,
                                    "blink blink-update":
                                        item.id ===
                                            Number(location.state?.id) &&
                                        Date.now() -
                                            Number(location.state?.updatedAt) <=
                                            5000,
                                })}
                            >
                                {displayedColumns.map((column) => (
                                    <TableCellComponent key={column[columnKey]}>
                                        {getType(customs[column[columnKey]]) ===
                                        "function"
                                            ? customs[column[columnKey]](item)
                                            : formatData(
                                                  column.type,
                                                  item[column[columnKey]],
                                              )}
                                    </TableCellComponent>
                                ))}
                                {toggleable ? <TableCellComponent /> : null}
                            </TableRowComponent>
                        ))}
                        {!data || data.length === 0 ? (
                            <TableEmptyComponent colSpan={columns.length + 2} />
                        ) : null}
                    </tbody>
                </table>
            </div>
            {pagination === true && data.length > 0 ? (
                <PaginationComponent
                    totalRecord={totalRecord}
                    onPageChange={onPageChange}
                    // className="-z-[1]"
                />
            ) : null}
        </div>
    );
};

export default TableView;
