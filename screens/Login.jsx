import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Foundation, Feather, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isChecked, setChecked] = useState(false);

  const [username, setUsername] = useState("kminchelle");
  const [userPass, setUserPass] = useState("0lelplR");
  const [err, setErr] = useState("Wrong Input");

  const handleLoginPress = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      })
    })
    .then(res => res.json())
    .then(data => {
      navigation.navigate('Root', {screen: "Account", params: { userData: data }});
    })
    .catch(error => console.warn(err));
  };

  // console.warn(err)
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" backgroundColor="white" translucent={false} />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 20,
            columnGap: 10,
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
            }}
          >
            Basket
          </Text>
        </View>
        <View style={{ paddingTop: 30, paddingHorizontal: 30 }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              color: "rgba(0, 20, 50, 0.8)",
            }}
          >
            Log into your account
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              lineHeight: 27,
              marginTop: 10,
              paddingHorizontal: 40,
              color: "rgba(0, 20, 50, 0.8)",
            }}
          >
            Enter your email and password to access your account or create an
            account
          </Text>
        </View>
        <View style={{ padding: 25, paddingTop: 60 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 20,
              borderBottomColor: "#fb7d10",
              paddingVertical: 5,
              borderBottomWidth: 1,
            }}
          >
            <Feather color={"#fb7d10"} size={24} name="mail" />
            <TextInput
              style={{ color: "black", fontSize: 20 }}
              placeholder="Enter your username"
              onChange={(text) => setUsername(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 20,
              borderBottomColor: "#fb7d10",
              paddingVertical: 5,
              borderBottomWidth: 1,
              marginTop: 25,
            }}
          >
            <Feather color={"#fb7d10"} size={24} name="key" />
            <TextInput
              textContentType="password"
              secureTextEntry={hidePassword}
              style={{ color: "black", fontSize: 20, flex: 1 }}
              placeholder="Enter your password"
              onChange={(text) => setUserPass(text)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {hidePassword ? (
                <Feather color={"grey"} size={24} name="eye" />
              ) : (
                <Feather color={"grey"} size={24} name="eye-off" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setChecked(!isChecked)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
              marginTop: 20,
            }}
          >
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "rgba(0, 20, 50, 0.8)" : undefined}
            />
            <Text>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLoginPress}
            style={{
              backgroundColor: "rgba(0, 20, 50, 0.8)",
              padding: 13,
              borderRadius: 8,
              marginTop: 50,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignItems: "baseline" }}>
          <Text
            style={{
              borderBottomColor: "#fb7d10",
              borderBottomWidth: 1,
              fontSize: 18,
              color: "#fb7d10",
              alignSelf: "center",
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "grey", textAlign: "center", marginTop: 30 }}>
          - or continue with -
        </Text>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            columnGap: 30,
            paddingTop: 30,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              padding: 15,
              borderWidth: 1,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <AntDesign
              size={22}
              name="facebook-square"
              color={"rgba(0, 20, 50, 0.8)"}
            />
            <Text style={{ fontSize: 20 }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
              padding: 15,
              borderWidth: 1,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <AntDesign size={22} name="google" color={"rgba(0, 20, 50, 0.8)"} />
            <Text style={{ fontSize: 20 }}>Google</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 10,
          }}
        >
          <Text style={{ fontSize: 17, opacity: 0.6 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 17, color: "#fb7d10" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  basketContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#fb7d10",
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
