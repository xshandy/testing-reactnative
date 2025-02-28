import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native"
import Geolocation from "./geolocation"
import PZHeader from "./components.jsx/header"
import { ScrollView } from "react-native"
import { Inter_400Regular } from "@expo-google-fonts/inter"
import { useFonts } from "expo-font"
import { SafeAreaProvider } from "react-native-safe-area-context"

const Lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Index() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
    })

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>
    }

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: "#87BC4E" }}>
                <ScrollView>
                    <PZHeader>Home</PZHeader>
                    <View style={styles.container}>
                        <Text style={styles.text}>{Lorem}</Text>
                        <Text style={styles.text}>{Lorem}</Text>
                        <Text style={styles.text}>{Lorem}</Text>
                        <Text style={styles.text}>{Lorem}</Text>
                        <Text style={styles.text}>{Lorem}</Text>
                        <Text style={styles.text}>{Lorem}</Text>
                        <Text style={styles.text}>{Lorem}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView
                style={{ flex: 1, backgroundColor: "#ffffff" }}
            ></SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#ffffff",
    },
    text: {
        fontFamily: "Inter_400Regular",
        fontSize: 16,
        marginLeft: "7.5%",
        marginRight: "7.5%",
    },
    safeArea: {
        backgroundColor: "#87BC4E",
    },
})
