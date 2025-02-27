import { Text, View, StyleSheet } from "react-native";
import Geolocation from "./geolocation";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Testing Zone</Text>
      <Geolocation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
