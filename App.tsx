import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Task from './components/Task';


function App(): JSX.Element {

  const [toDos, setToDos] = useState([{ id: 1, title: 'eat' }, { id: 2, title: 'sleep' }, { id: 3, title: 'shower' }]);
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <View>
          <Text style={styles.headerText}>To Do List</Text>
        </View>
        <FlatList
          data={toDos}
          renderItem={({ item }) => <Task text={item.title}/>}
          />
        <TextInput style={styles.toDoInput}
          placeholder='What do you need to do?' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10

  },
  toDoInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }

});

export default App;
