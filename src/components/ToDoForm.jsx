import React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';

// Destructuring addTask from the props
function ToDoForm({ addTask }) {

  // Manage local state for the task input
  const [taskText, setTaskText] = useState('');

  // Define handleAddTask to call addTask prop
  const handleAddTask = () => {
    addTask(taskText); // Call the addTask function with taskText
    setTaskText(''); // Clear the input field after adding the task
  };

  
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update local state on text input
        value={taskText} // Set input value to local state
      />
      
      {/* Call handleAddTask on button press */}
      <Button title="Add Task" onPress={handleAddTask} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
