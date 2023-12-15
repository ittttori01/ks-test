import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import IconButton from "./components/IconButton";
import CircleButton from "./components/CircleButton";
import axios from "axios";
import ProductTable from "./components/ProductTable";
const url = "http://localhost:3001";

const PlaceholderImage = require("./assets/background-image.png");
export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    //create modal
    const [showAppOptions, setShowAppOPtions] = useState(false);

    const [extractedData, setExtractedData] = useState([]);
    const onReset = () => {
        setShowAppOPtions(false);
    };

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + `/product/8801062883240`);
                const { name, spec, price } = res.data;
                const data = [{ name, spec, price }];
                setExtractedData(data);
            } catch (error) {
                console.error("Error fetching price:", error);
            }
        })();
    }, []);

    const onAddSticker = () => {};

    const onSaveImageAsync = async () => {};

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOPtions(true);
        } else {
            alert("You did not select any image.");
        }
    };
    return (
        <View style={styles.container}>
            {setExtractedData ? (
                <View style={styles.imageContainer}>
                    <ProductTable extractedData={extractedData} />
                </View>
            ) : (
                <View style={styles.imageContainer}>
                    <ImageViewer
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                    ></ImageViewer>
                </View>
            )}

            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton
                            icon="refresh"
                            label="Reset"
                            onPress={onReset}
                        />
                        <CircleButton onPress={onAddSticker}></CircleButton>
                        <IconButton
                            icon="save-alt"
                            label="Save"
                            onPress={onSaveImageAsync}
                        />
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    <Button
                        theme="primary"
                        label="Choose a photo"
                        onPress={pickImageAsync}
                    />
                    <Button
                        label="Use this photo"
                        onPress={() => setShowAppOptions(true)}
                    />
                </View>
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
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        alignItems: "center",
        flexDirection: "row",
    },
});
