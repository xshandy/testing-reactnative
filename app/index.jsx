import { Text, View, StyleSheet, StatusBar } from "react-native"
import Geolocation from "./geolocation"
import PZHeader from "./components.jsx/header"
import { ScrollView } from "react-native-web"

const Lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Index() {
    return (
        <ScrollView>
            <StatusBar hidden />

            <PZHeader>Home</PZHeader>
            <View style={styles.container}>
                <Text>{Lorem}</Text>
                <Text>{Lorem}</Text>
                <Text>{Lorem}</Text>
                <Text>{Lorem}</Text>
                <Text>{Lorem}</Text>
                <Text>{Lorem}</Text>
                <Text>{Lorem}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        marginLeft: "7.5%",
        marginRight: "7.5%",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
})
