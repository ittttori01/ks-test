import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import ProductTable from "./components/ProductTable";

const url = "http://localhost:3001";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [image, setImage] = useState(null);
    const [extractedData, setExtractedData] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");

            const imagePickerStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (imagePickerStatus.status !== "granted") {
                console.error("Camera roll permission not granted");
            }
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const price = getPrice(data.trim());
        alert(data);
    };

    const getPrice = async (barcode) => {
        try {
            const requestUrl = url + `/product/${barcode}`;
            console.log(requestUrl);
            await axios
                .get(url + `/product/${barcode}`)
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

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            setScanned(false);
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
            <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 400, height: 200 }}
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
