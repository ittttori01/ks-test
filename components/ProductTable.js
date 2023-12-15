import React from "react";
import { useTable } from "react-table";

const ProductTable = (extractedData) => {
    // 예시 데이터
    // const data = React.useMemo(() => extractedData, []);
    console.log(extractedData);
    // 컬럼 정의
    const columns = React.useMemo(
        () => [
            { Header: "name", accessor: "name" },
            { Header: "sepc", accessor: "spec" },
            { Header: "Barcode", accessor: "barcode" },
        ],
        []
    );

    return (
        <h1></h1>
        // <table {...getTableProps}>
        //     <thead>
        //         {headerGroups.map((headerGroup) => (
        //             <tr {...headerGroup.getHeaderGroupProps()}>
        //                 {headerGroup.headers.map((column) => (
        //                     <th {...column.getHeaderProps()}>
        //                         {column.render("Header")}
        //                     </th>
        //                 ))}
        //             </tr>
        //         ))}
        //     </thead>
        //     <tbody {...getTableBodyProps()}>
        //         {rows.map((row) => {
        //             prepareRow(row);
        //             return (
        //                 <tr {...row.getRowProps()}>
        //                     {row.cells.map((cell) => {
        //                         return (
        //                             <td {...cell.getCellProps()}>
        //                                 {cell.render("Cell")}
        //                             </td>
        //                         );
        //                     })}
        //                 </tr>
        //             );
        //         })}
        //     </tbody>
        // </table>
    );
};

export default ProductTable;
