import React, { useState } from "react";
import { IconAdd, IconTune } from "../../../icons";
import SelectMultipleComponent from "../../Select/SelectMultipleComponent";
import { getType } from "../../../utils/TypeUtil";
import { formatData } from "../../../utils/FormatUtil";
import { cloneObjectWithKeys, isFalsyObject } from "../../../utils/ObjectUtil";
import TableRowComponent from "./TableRowComponent";
import TableCellComponent from "./TableCellComponent";

const TableEdit = ({
    columns = [],
    customs = {},
    editFields = {},
    data = [],
    onAdd,
    onValidate,
    renderKey = "name",
    columnKey = "id",
    toggleable = true,
    keyExtractor,
}) => {
    const [hiddenColumns, setHiddenColumns] = useState([]);
    const displayedColumns = columns.filter(
        (column) => !hiddenColumns.includes(column[columnKey]),
    );
    const handleToggleColumn = (column) => {
        setHiddenColumns((prev) => {
            if (prev.includes(column[columnKey]))
                return prev.filter((element) => element !== column[columnKey]);

            return prev.concat(column[columnKey]);
        });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        let invalidField;
        const requiredFields = columns.filter((column) => column.required);
        const requiredFieldKeys = requiredFields.map(
            (field) => field[columnKey],
        );
        const invalidRecord = data.find((item) => {
            const cloneItem = cloneObjectWithKeys(item, requiredFieldKeys);
            invalidField = requiredFieldKeys.find((key) => !cloneItem[key]);
            // invalidFields.push(invalidField);
            return isFalsyObject(cloneItem);
        });

        if (!invalidRecord || requiredFields.length === 0) {
            onAdd?.();
            onValidate?.({});
        } else onValidate?.({ id: invalidRecord.id, field: invalidField });
    };
    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table className="table text-left">
                    <thead className="table-header">
                        <tr className="table-header-row">
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
                        {data.map((item) => (
                            <TableRowComponent
                                key={keyExtractor?.({ item }) ?? Date.now()}
                                item={item}
                            >
                                {displayedColumns.map((column) => (
                                    <TableCellComponent
                                        key={column[columnKey]}
                                        required={column.required}
                                    >
                                        {getType(
                                            editFields[column[columnKey]],
                                        ) === "function"
                                            ? editFields[column[columnKey]](
                                                  item,
                                              )
                                            : getType(
                                                    customs[column[columnKey]],
                                                ) === "function"
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
                        <TableRowComponent>
                            <TableCellComponent>
                                <button
                                    className="w-fit cursor-pointer p-1 active:scale-90"
                                    onClick={handleAddItem}
                                >
                                    <IconAdd className="h-3 w-3 fill-white/60" />
                                </button>
                            </TableCellComponent>
                            <TableCellComponent
                                colSpan={displayedColumns.length - 1}
                            />
                            {toggleable ? <TableCellComponent /> : null}
                        </TableRowComponent>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableEdit;
