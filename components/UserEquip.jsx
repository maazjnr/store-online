import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";

const UserEquip = () => {
  return (
    <View style={{backgroundColor:"white", height:"80%",position:"relative", padding:20, alignItems:"center",borderTopLeftRadius:50,
    borderTopRightRadius:50}}>
      <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 50,
        paddingHorizontal:60,
        position:"absolute",
        top:-100,
        backgroundColor:"white", 
        width:"100%",
        borderRadius:20,
        elevation:3,
        maxHeight:"100%",
        marginTop:20
      }}
    >
      
      <ScrollView>
        <TouchableOpacity
        style={{
          display: "flex",
          width:"100%",
          flexDirection: "row",
          padding: 10,
          columnGap:40,
          alignItems:"center"
        }}
      >
        <Ionicons name="notifications" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Notification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width:"100%",
          flexDirection: "row",
          padding: 10,
          columnGap:40,
          alignItems:"center"
        }}
      >
        <FontAwesome name="user-plus" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width:"100%",
          padding: 10,
          columnGap:40
        }}
      >
        <AntDesign name="star" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Wishlist
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width:"100%",
          padding: 10,
          columnGap:40
        }}
      >
        <Ionicons name="receipt" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
         Order History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width:"100%",
          padding: 10,
          columnGap:40
        }}
      >
        <Ionicons name="ios-location-sharp" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
         Track Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width:"100%",
          padding: 10,
          columnGap:40
        }}
      >
        <Ionicons name="card-outline" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
         Payment Option
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width:"100%",
          padding: 10,
          columnGap:40
        }}
      >
        <Ionicons name="settings-sharp" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
         Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width:"100%",
          padding: 10,
          columnGap:40
        }}
      >
        <SimpleLineIcons name="logout" size={30} color="#fb7d10" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
         Logout
        </Text>
      </TouchableOpacity>
      </ScrollView>
      
    </View>
    </View>
  );
};

export default UserEquip;
