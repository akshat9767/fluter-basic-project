import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfStyles from './componets/style_apply';
import ButtonBasics from './componets/style_button';
import Counter from './componets/CounterApp';
import TodoListApp from './componets/TodoListApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherApp from './componets/weatherAPP';
import ScreenApp from './componets/screenApp';
import ProfileScreen from './componets/ProfileApp';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={ButtonBasics}
    //       options={{ title: 'Welcome' }}
    //     />
    //     <Stack.Screen name="Counter" component={Counter} />
    //     <Stack.Screen name="TodoList" component={TodoListApp} />
    //     <Stack.Screen name="screen" component={ScreenApp} />
    //   </Stack.Navigator>
    // </NavigationContainer> 
<>

<TodoListApp />
{/* <ProfileScreen /> */}


<ProfileScreen />

</>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
