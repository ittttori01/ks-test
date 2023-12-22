import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

const ProductDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { data } = route.params;

    // 바코드를 기반으로 데이터를 가져와 컴포넌트를 업데이트하세요
    console.log(data);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text>{data[0].price}</Text>
            </View>
        </View>
    );
    //   return (
    //     // ... 기존 ProductTable 컴포넌트 코드
    //   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    image: {
        width: 320,
        height: 400,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
});
export default ProductDetail;
