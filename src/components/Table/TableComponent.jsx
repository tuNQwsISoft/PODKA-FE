import React from "react";
import "./styles.css";
import TableEdit from "./_component/TableEdit";
import TableView from "./_component/TableView";
const TableComponent = ({
    columns = [],
    customs = {},
    editFields = {},
    onAdd,
    onValidate,
    data = [],
    renderKey = "name",
    columnKey = "id",
    pagination = false,
    totalRecord = 0,
    onPageChange,
    rowSelection,
    toggleable = true,
    keyExtractor,
    editable = false,
}) => {
    if (columns.length === 0) return null;
    if (editable)
        return (
            <TableEdit
                columns={columns}
                customs={customs}
                editFields={editFields}
                data={data}
                onAdd={onAdd}
                renderKey={renderKey}
                columnKey={columnKey}
                toggleable={toggleable}
                keyExtractor={keyExtractor}
                onValidate={onValidate}
            />
        );
    return (
        <TableView
            columns={columns}
            customs={customs}
            data={data}
            renderKey={renderKey}
            columnKey={columnKey}
            toggleable={toggleable}
            keyExtractor={keyExtractor}
            pagination={pagination}
            totalRecord={totalRecord}
            onPageChange={onPageChange}
            rowSelection={rowSelection}
        />
    );
};

export default TableComponent;
