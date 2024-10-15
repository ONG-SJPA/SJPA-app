import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/auth/Login/screen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false, // statusBarColor: '#1d4ed8'
        }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <View className="bg-slate-500 text-red-600">
      <Text>teste</Text>
    </View>
  );
}
