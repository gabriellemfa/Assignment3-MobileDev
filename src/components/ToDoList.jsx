import React from 'react';
import {
    View,
    Text,
} from 'react-native';

function ToDoList({ tasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task}</Text>
        </View>
      ))}
    </>
  );
}


//const styles = StyleSheet.create({
//  task: {
//    padding: 10,
//    borderBottomWidth: 1,
//    borderColor: '#ccc',
//  },
//  completed: {
//    backgroundColor: '#e0e0e0',
//  },
//  taskText: {
//    fontSize: 16,
//  },
//});

export default ToDoList;
