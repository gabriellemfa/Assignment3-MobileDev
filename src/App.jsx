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


const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask(''); // Clear the input field
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

          {/**input for adding tasks */}
          <TextInput
            style={styles.input}
            placeholder="Add new task"
            value={newTask}
            onChangeText={setNewTask}
          />

          {/**Button to add task */}
          <Pressable>
            <Button title="Add Task" onPress={addTask} />
          </Pressable>
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
