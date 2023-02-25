import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FavoriteContextProvider } from './store/context/favorite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (<Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#866754',
  }}>
    <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name='list' color={color} size={size} />
        )
      }} />
    <Drawer.Screen
      name='Favorites'
      component={FavoriteScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='star' color={color} size={size} />
        )
      }} />

  </Drawer.Navigator>
  )
}

const App = () => {
  return (<>
    <Provider store={store}>
      {/* <FavoriteContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverView'
              component={MealsOverViewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen} options={{
                title: 'About the Meal',
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoriteContextProvider> */}
    </Provider>
  </>
  )
}

export default App

const styles = StyleSheet.create({

})