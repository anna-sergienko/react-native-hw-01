import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const BottomTab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  const [focusedGridIcon, setFocusedGridIcon] = useState(false);
  const [focusedUserIcon, setFocusedUserIcon] = useState(false);

  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingHorizontal: 90,
          paddingTop: 0,
          borderTopWidth: 1,
        },
        tabBarInactiveTintColor: '#FF6C00',
        tabBarActiveTintColor: '#FFF',
      })}
    >
      <BottomTab.Screen
        name="Posts"
        component={PostsScreen}
        
        options={() => ({
          headerTitle: "Публікації",
          tabBarIcon: () => (

            <TouchableOpacity
              onPress={() => {
                setFocusedGridIcon(true);
                setFocusedUserIcon(false);
                navigation.navigate("Posts");
              }}
            >
              <AntDesign
                name="appstore-o"
                size={24}
                color={focusedGridIcon ? "#FF6C00" : "#212121CC"}
              />
            </TouchableOpacity>


          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16, width: 24, height: 24 }}
              onPress={() => {
                navigation.navigate("Login")
              }}
            >
              <Feather
                name="log-out"
                size={24}
                color="#212121CC"
              />
            </TouchableOpacity>
          ),
          })}
/>

      <BottomTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <View style={{ ...styles.icon, backgroundColor: "#FF6C00" }}>
            <AntDesign name="plus" size={24} color='#fff' />
            </View>
          ),
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#fff",
          },
          headerTintColor: "#212121",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16, width: 20, height: 20 }}
              onPress={() => {
                navigation.navigate("Posts"),
                setFocusedGridIcon(true),
                setFocusedUserIcon(false);
              }}
            >
              <Feather
                name="arrow-left"
                size={24}
                color="#212121CC"
              />
            </TouchableOpacity>
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        
        options={{
          headerTitle: "Профіль",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#FFF",
          },
          headerTintColor: "#212121",
          tabBarIcon: () => (
            <TouchableOpacity
            onPress={() => {
              setFocusedGridIcon(false),
                setFocusedUserIcon(true);
              navigation.navigate("Profile");
            }}
          >
            <Feather
              name="user"
              size={24}
              color={focusedUserIcon ? "#FF6C00" : "#212121CC"}
            />
          </TouchableOpacity>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}



const styles = StyleSheet.create({
  icon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});


