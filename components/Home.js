// HomeScreen.js
import { useEffect, React } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import axios from "axios";

const url = "https://c4e2-58-120-200-130.ngrok-free.app";

const Home = () => {
    const navigation = useNavigation();
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + `/product/8801062883240`);
                console.log(res.data);
                const { name, spec, price } = res.data;
                // 가공된 데이터를 생성
                const data = [{ name, spec, price }];
                // navigation.navigate("ProductDetail", { data });
                // 가공된 데이터를 state에 설정
            } catch (error) {
                console.error("Error fetching price:", error);
            }
        })();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}></View>
        </View>
    );
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

export default Home;
