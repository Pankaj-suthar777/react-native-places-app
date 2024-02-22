import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/places/IconButton';
import {Colors} from './constants/colors';

const Stack = createNativeStackNavigator();

function AddPlacesButton({tintColor, navigation}) {
  return (
    <IconButton
      icon="plus"
      size={16}
      color={tintColor}
      onPress={() => navigation.navigate('AddPlace')}
    />
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({navigation}) => ({
            title: 'Your Favorite Places',
            headerRight: ({tintColor}) => (
              <AddPlacesButton navigation={navigation} tintColor={tintColor} />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title: 'Add a new Places',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
