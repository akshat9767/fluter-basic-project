import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default function ButtonBasics({navigation}) {
  const onPress = () => {
    Alert.alert('You tapped the button!');
  };
  const openApp = (appName) => {
    console.log('opening App:'+appName);
    navigation.navigate(appName, {name:'jane'})
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button onPress={() => openApp("counter")} title="open counter app"/>
        <Button onPress={onPress} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={()=> openApp("TodoList")} title="open" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={onPress} title="This looks great!" />
       
        <Button onPress={() => openApp("weatherApp")} title="Get weather" color="#841584" />
      

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

