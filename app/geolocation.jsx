import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

import plantImg from "../assets/images/threeplants.jpg";

const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    Location.requestForegroundPermissionsAsync()
      .then(({ status }) => {
        if (status !== "granted") {
          console.log("Please grant location permissions");
          return;
        }

        return Location.getCurrentPositionAsync({});
      })
      .then((currentLocation) => {
        if (currentLocation) {
          setLocation(currentLocation);
          console.log("Location:");
          console.log(currentLocation);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const geocode = () => {
    Location.geocodeAsync(address)
      .then((geocodedLocation) => {
        console.log("Geocoded Address:");
        console.log(geocodedLocation);
      })
      .catch((error) => {
        console.log("Geocoding error:", error);
      });
  };

  const reverseGeocode = () => {
    if (location && location.coords) {
      Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      })
        .then((reverseGeocodedAddress) => {
          console.log("Reverse Geocoded:");
          console.log(reverseGeocodedAddress);
        })
        .catch((error) => {
          console.log("Error in reverse geocoding:", error);
        });
    } else {
      console.log("Location is not available.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={plantImg} style={styles.image}>
        <Text style={styles.text}>Testing Zone!</Text>
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <Button title="Geocode Address" onPress={geocode} />
        <Button
          title="Reverse Geocode Current Location"
          onPress={reverseGeocode}
        />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

export default Geolocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "green",
    fontSize: 50,
    textAlign: "center",
    marginTop: 90,
  },
});
