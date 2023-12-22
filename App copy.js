import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import ProductTable from "./components/ProductTable";

const url = "https://5d7d-58-120-200-130.ngrok-free.app";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [extractedData, setExtractedData] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const barcode = getPrice(data.trim());
        alert(barcode);
    };

    const getPrice = async (barcode) => {
        try {
            const requestUrl = url + `/product/${barcode}`;
            console.log(requestUrl);
            await axios
                .get(requestUrl)
                .then((res) => {
                    const { name, spec, price } = res.data;
                    const data = [{ name, spec, price }];
                    setExtractedData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
            // 콘솔에 데이터 출력 (수정 필요)
        } catch (error) {
            console.error("Error fetching price:", error);
        }
    };

    return (
        <View style={styles.container}>
            {extractedData.length > 0 ? (
                <View style={styles.imageContainer}>
                    <ProductTable extractedData={extractedData} />
                </View>
            ) : (
                <View style={styles.imageContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={
                            scanned ? undefined : handleBarCodeScanned
                        }
                        style={styles.image} // BarCodeScanner에 직접 스타일 적용
                    />
                </View>
            )}
            {scanned && (
                <Button
                    title={"Tap to Scan Again"}
                    onPress={() => setScanned(false)}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
