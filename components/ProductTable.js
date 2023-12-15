import React from "react";
import { useTable } from "react-table";

export default function ProductTable({ extractedData }) {
    const columns = React.useMemo(
        () => [
            {
                Header: "상품명",
                accessor: "name",
            },
            {
                Header: "규격",
                accessor: "spec",
            },
            {
                Header: "판매가",
                accessor: "price",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data: extractedData });

    return (
        <table {...getTableProps()} style={{ border: "1px solid black" }}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: "2px solid black",
                                    background: "aliceblue",
                                    padding: "8px",
                                    textAlign: "left",
                                }}
                            >
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            {/* <tbody {...getTableBodyProps()}>
                {rows.map((row, rowIndex) => {
                    const rowKey = `row-${rowIndex}`;
                    return (
                        <tr
                            {...row.getRowProps()} // 올바르게 getRowProps 호출
                            key={rowKey}
                            style={{ borderBottom: "1px solid black" }}
                        >
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                    key={`${rowKey}-${cell.column.id}`}
                                    style={{
                                        padding: "8px",
                                        border: "1px solid black",
                                    }}
                                >
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody> */}
        </table>
    );
}
