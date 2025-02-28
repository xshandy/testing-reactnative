import { Text, View, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { Raleway_200ExtraLight } from "@expo-google-fonts/raleway"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"

function PZHeader({ children }) {
    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
    })

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default PZHeader

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#87BC4E",
    },
    text: {
        color: "#ffffff",
        fontFamily: "FugazOne_400Regular",
        fontSize: 50,
    },
})
