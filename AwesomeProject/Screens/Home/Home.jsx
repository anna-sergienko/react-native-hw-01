import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const BottomTab = createBottomTabNavigator();

export default function Home() {
  return (
    <BottomTab.Navigator tabBarOptions={{ shawLabel: false }}>
      <BottomTab.Screen
        name="Posts"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerShown: false,
        }}
        component={PostsScreen}
      />
      <BottomTab.Screen
        name="CreatePosts"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
          headerShown: false,
        }}
        component={CreatePostsScreen}
      />
      <BottomTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
}
