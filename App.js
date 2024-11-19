import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import BookingScreen from './screens/BookingScreen';
import HeaderButton from './components/HeaderButton'; // Import the custom header button

const Stack = createNativeStackNavigator();

const headerOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: 'tomato' },
  headerTintColor: 'black',
  headerTitleAlign: 'center',
  headerTitleStyle: { fontWeight: 'bold' },
  headerRight: () => (
    <HeaderButton
      title="Logout"
      onPress={() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
          })
        );
      }}
    />
  ),
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;