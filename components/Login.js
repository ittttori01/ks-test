import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            {/* Add your login components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
});

export default LoginScreen;
