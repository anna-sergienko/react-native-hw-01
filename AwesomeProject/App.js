
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Button, TouchableOpacity, Image } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Home from './Screens/Home/Home';

const MainStack = createStackNavigator();

export default function App() {

  return (
<NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Публікації",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: 500,
              fontSize: 17,
            },

            headerRight: () => (
              <TouchableOpacity style={{marginLeft: 10}}
              >
                <Image
                source={require('./assets/log-out.png')}
                style={{width:24, height: 24}}
              />
              </TouchableOpacity>
            ),
          }}
        />
      </MainStack.Navigator>
</NavigationContainer>
  )
}






