import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const BottomTab = createBottomTabNavigator();

export default function Home() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Posts"
        options={{
          headerShown: false,
        }}
        component={PostsScreen}
      />
      <BottomTab.Screen
        name="CreatePosts"
        options={{
          headerShown: false,
        }}
        component={CreatePostsScreen}
      />
      <BottomTab.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
}
