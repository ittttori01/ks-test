import { StyleSheet } from "react-native";

const ProductTable = ({ extractedData }) => {
    // 여기에서 테이블을 렌더링합니다.
    return (
        <div>
            <p style={styles.text}>품명: {extractedData[0].name}</p>
            <p style={styles.text}>규격: {extractedData[0].spec}</p>
            <p style={styles.text}>
                가격:
                {extractedData[0].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
            </p>
        </div>
        // <table style={styles.tableContainer}>
        //     <thead>
        //         <tr>
        //             {headers.map((header) => (
        //                 <th key={header.text}>
        //                     {header.text} {/* 컬럼명 바인딩 */}
        //                 </th>
        //             ))}
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {" "}
        //         {extractedData.map((item, index) => (
        //             <tr key={index}>
        //                 {/* headerKey를 순회하면서 key를 가져옴 */}
        //                 {headerKey.map((key) => (
        //                     <td key={key + index}>
        //                         {item[key]} {/* key로 객체의 값을 출력 */}
        //                     </td>
        //                 ))}
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
    );
};

export default ProductTable;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "#ffffff",
    },
    tableContainer: {
        width: "100%",
        borderWidth: 1,
        marginTop: 20,
    },
    tableHeader: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
    },
    headerCell: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: "#000000",
        padding: 8,
        textAlign: "left",
    },
    tableRow: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
    },
    tableCell: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: "#000000",
        padding: 8,
        textAlign: "left",
    },
});
