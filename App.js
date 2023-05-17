import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './components/BasketScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import ProfileScreen from './screens/ProfileScreen';
import American from './pages/American';
import African from './pages/African';
import Italian from './pages/Italian';
import Japanese from './pages/Japanese';
import Indian from './pages/Indian';
import Onboarding from './pages/Onboarding';
import CartScreen from './screens/CartScreen';
import { useState } from 'react';
import PreparingOrder from './screens/PreparingOrder';
import DeliveryScreen from './screens/DeliverScreen';
import Chatbot from './src/Index';


// import { Store } from '@reduxjs/toolkit';
// npm i @sanity/client @sanity/image-url (when you want to use sanity for back end)
// import store from store

const Stack = createNativeStackNavigator();

export default function App() {
  const [choosenFood, setChoosenFood] = useState([]);
  const handlechoosenFood = (properties)=>{
    console.log(choosenFood)
    choosenFood.push(properties)
  }
  
  return (
    <Provider store={store}>
      <TailwindProvider >
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Onboard" component={Onboarding} options={{headerShown:false}} />
              <Stack.Screen name="Home" component={HomeScreen} editItemsContainer={handlechoosenFood}/>
              <Stack.Screen name="Restaurant" component={RestaurantScreen} editItemsContainer={handlechoosenFood}/>
              <Stack.Screen name ='BasketScreen' component={BasketScreen}/>
              <Stack.Screen name ='Profile' component={ProfileScreen} options={{headerShown:false}}/>
              <Stack.Screen name ='American' component={American} options={{headerShown:false}}/>
              <Stack.Screen name ='African' component={African} options={{headerShown:false}}/>
              <Stack.Screen name ='Italian' component={Italian} options={{headerShown:false}}/>
              <Stack.Screen name ='Japanese' component={Japanese} options={{headerShown:false}}/>
              <Stack.Screen name ='India' component={Indian} options={{headerShown:false}}/>
              <Stack.Screen name ='Cart' component={CartScreen} options={{headerShown:false,presentation:'modal'}} editItemsContainer={handlechoosenFood} />
              <Stack.Screen name ='PreparingOrder' component={PreparingOrder} options={{headerShown:false}}/>
              <Stack.Screen name ='DeliveryScreen' component={DeliveryScreen} options={{headerShown:false}}/>
              <Stack.Screen name="Chatbot" component={Chatbot} options={{headerShown:false}} />


            </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
  
};
