import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, Pressable } from "react-native";

export default function IconButton({ icon, label, onPress }) {
    return (
        <Pressable style={styles.iconButton} onPress={onprogress}>
            <MaterialIcons name={icon} size={24} color="#fff"></MaterialIcons>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonLabel: {
        color: "#fff",
        marginTop: 12,
    },
});
