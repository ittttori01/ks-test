import { StyleSheet } from "react-native";

const ProductTable = ({ extractedData }) => {
    // 여기에서 테이블을 렌더링합니다.
    return (
        <View style={styles.container}>
            {extractedData.map((product, index) => (
                <View key={index} style={styles.productContainer}>
                    <Text style={styles.label}>제품 명:</Text>
                    <Text style={styles.value}>{product.name}</Text>

                    <Text style={styles.label}>제품 이름:</Text>
                    <Text style={styles.value}>{product.spec}</Text>

                    <Text style={styles.label}>제품 가격:</Text>
                    <Text style={styles.value}>
                        {Number(product.price).toLocaleString()}
                    </Text>
                </View>
            ))}
        </View>
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
