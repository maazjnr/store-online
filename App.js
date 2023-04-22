import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "./screens/GetStarted";
import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import {AntDesign} from "@expo/vector-icons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountPage from "./screens/AccountPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Page = ()=>{
  return (
    <Text>Hello</Text>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
          height:65,
          elevation:0,
        }
        
      }}
     
    >
      <Tab.Screen
        name="Home"
        component={Page}
        options={{
          
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center"}}>
              <AntDesign size={22} name="home" color={focused ? "#fb7d10" :"rgba(0, 20, 50, 0.8)"} />
              <Text style={{color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Starred"
        component={Page}
        
        options={{
          
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center"}}>
              <AntDesign size={22} name="staro" color={focused ? "#fb7d10" :"rgba(0, 20, 50, 0.8)"} />
              <Text style={{color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}}>Starred</Text>
            </View>
          ),
         
          
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center"}}>
              <AntDesign size={22} name="user" color={focused ? "#fb7d10" :"rgba(0, 20, 50, 0.8)"} />
              <Text style={{color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}}>Account</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Page}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center"}}>
              <AntDesign size={22} name="shoppingcart" color={focused ? "#fb7d10" :"rgba(0, 20, 50, 0.8)"} />
              <Text style={{color: focused ? "#fb7d10" : "rgba(0, 20, 50, 0.8)"}}>Cart</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        style="light"
        backgroundColor="rgba(0, 20, 50, 0.8)"
        translucent={false}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation:"slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Root" component={MyTabs} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
