import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons  } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor: "white",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding:10,
        columnGap:10
    }}>
        <Ionicons name="search-outline" size={24} color="black" />

      <TextInput
        style={{ color: "black", fontSize: 20 }}
        placeholder="Search"
      />

    </View>
  );
};

export default Search;
