import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import Detail from "./src/Detail";
import Home from "./src/Home";
import Search from "./src/Search";


const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: () => {
              return (<AntDesign name="home" size={24} color="black" />)
            }
          }}
        />
        <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: () => {
            return (<AntDesign name="search1" size={24} color="black" />)
          }
        }}
        />
        <Tab.Screen name="Detail" component={Detail} 
         options={{
          tabBarIcon: () => {
            return (<MaterialCommunityIcons name="details" size={24} color="black" />)
          }
        }}
        />
      </Tab.Navigator>

    </NavigationContainer>

  );
}

export default App;