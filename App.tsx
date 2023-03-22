import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Task from './components/Task';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={ {flex: 1}}>
      <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View>
        <Text style={styles.headerText}>To Do List</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Task text='1'/>
          <Task text='2'/>
          <Task text='3'/>
          <Task text='4'/>
          <Task text='5'/>
          <Task text='6'/>
          <Task text='7'/>
          <Task text='8'/>
          <Task text='9'/>
          <Task text='10'/>
          <Task text='11'/>
          <Task text='12'/>
          <Task text='13'/>
          <Task text='14'/>
          <Task text='15'/>
          <Task text='16'/>
          <Task text='17'/>
          <Task text='18'/>
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10

  }
  
});

export default App;
