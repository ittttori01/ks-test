import { StyleSheet, View, Text } from "react-native";

const ProductTable = ({ extractedData }) => {
    // 여기에서 테이블을 렌더링합니다.
    return (
        <View style={styles.container}>
            {extractedData.map((product, index) => (
                <View key={index} style={styles.container}>
                    <Text style={styles.title}>제품 명:</Text>
                    <Text style={styles.value}>{product.name}</Text>

                    <Text style={styles.description}>규격:</Text>
                    <Text style={styles.value}>{product.spec}</Text>

                    <Text style={styles.priceContainer}>제품 가격:</Text>
                    <Text style={styles.value}>
                        {Number(product.price).toLocaleString()}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    currency: {
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 5,
    },
    amount: {
        fontSize: 32,
        fontWeight: "bold",
    },
    offer: {
        backgroundColor: "#F2F2F2",
        color: "#333333",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    listContainer: {
        marginLeft: 20,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ProductTable;
