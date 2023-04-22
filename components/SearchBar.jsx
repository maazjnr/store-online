import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Foundation, Feather, Ionicons  } from "@expo/vector-icons";
import Search from "./Search";

const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0, 20, 50, 0.8)",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 20,
          columnGap: 20,
          padding: 10, 
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#fb7d10",
            borderRadius: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Foundation name="shopping-cart" size={25} color="white" />
        </View>

        <Search />
        <Feather name="menu" size={30} color="#fb7d10" />
      </View>
    </View>
  );
};

export default SearchBar;