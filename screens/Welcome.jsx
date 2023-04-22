import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import bgImg from "../assets/image/bg.jpg";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({navigation}) => {


  return (
    <ImageBackground source={bgImg} style={styles.background}>
      <View style={styles.colorLayer} />
      <View style={styles.container}>
        <View style={styles.basketContainer}>
          <Foundation name="shopping-cart" size={35} color="white" />
          <Text style={styles.basketText}>Basket</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textContainerText1}>Start Shopping</Text>
          <Text style={styles.textContainerText2}>Stay Happy</Text>
          <Text style={styles.textContainerText3}>Anytime</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.basketOnlineText}>Basket online marketplace</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: "#fb7d10",
                  fontSize: 20,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
              <Text
                style={{
                  color: "#fb7d10",
                  fontSize: 20,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    justifyContent: "center",
    width: "100%",
  },

  colorLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 30, 50, 0.8)", // 50% opacity black
  },
  basketText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  basketContainer: {
    width: 180,
    height: 180,
    backgroundColor: "#fb7d10",
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 180,
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  textContainerText1: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },

  textContainerText2: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
  textContainerText3: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },

  buttonContainer: {
    marginTop: 150,
    width: "100%",
    padding: 30,
  },

  basketOnlineText: {
    color: "#fb7d10",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default Welcome;
