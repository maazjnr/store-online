import { StyleSheet, Text, View, Image } from "react-native";
import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import UserImg from "../assets/image/urban-892.png";
import UserEquip from "../components/UserEquip";
import { StatusBar } from "expo-status-bar";
import { useRoute } from '@react-navigation/native';

const AccountPage = () => {

  const route = useRoute();
  const { userData } = route.params;


  return (
    <View>
      <StatusBar
        backgroundColor="rgba(0, 20, 50, 0.8)"
        translucent={false}
        style="light"
      />
      <SearchBar />
      <View style={{ backgroundColor: "#fb7d10" }}>
        <View style={styles.userBar}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
                backgroundColor: "black",
                overflow: "hidden",
                borderColor: "white",
                borderWidth: 1,
              }}
            >
              <Image
                source={{uri:  userData.image}}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                }}
              />
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  borderBottomColor: "#000",
                  fontSize: 22,
                  color: "#000",
                  fontWeight: "600",
                }}
              >
              {userData.firstName} {userData.lastName}
              </Text>

              <Text
                style={{
                  borderBottomColor: "#000",
                  fontSize: 15,
                  color: "#000",
                  alignSelf: "center",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
              {userData.email}
              </Text>
            </View>
          </View>
        </View>

        <UserEquip />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userBar: {
    backgroundColor: "#fb7d10",
    height: "20%",
  },
});

export default AccountPage;
