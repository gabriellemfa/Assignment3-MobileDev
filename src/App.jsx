/**
 * My To Do List App
 *
 * @format
 */

import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.form}>

          {/**Header */}
          <Text style={styles.taskText}>Task List</Text>

          {/**display tasks */}
          <ToDoList tasks={tasks}/>

          {/**Pass addTask as a prop to ToDoForm */}
          <ToDoForm addTask={addTask} />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 45,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
