import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import GetImg from "../assets/image/urban-892.png";
import { MaterialIcons } from "@expo/vector-icons";

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <View style={styles.basketContainer}>
          <Foundation name="shopping-cart" size={25} color="white" />
        </View>
        <Text
          style={{
            color: "#fb7d10",
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginLeft: 10,
          }}
        >
          Basket
        </Text>
      </View>

      <View>
        <Text
          style={{
            color: "#999",
            fontSize: 20,
            fontWeight: "300",
            textAlign: "center",
            padding: 5,
          }}
        >
          Welcome to
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          best market online store
        </Text>

        <Text
          style={{
            color: "#999",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            padding: 20,
            marginTop: -10,
          }}
        >
          basket is the No. 1 online store for new and used products.
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={GetImg}
          style={{
            width: 460,
            height: 350,
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fb7d10",
          height: 60,
          margin: 50,
          borderRadius: 20,
          columnGap:10
        }}

        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Get Started
        </Text>

        <MaterialIcons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 20, 50, 0.8)",
    flex: 1,
  },

  basketContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#fb7d10",
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default GetStarted;
