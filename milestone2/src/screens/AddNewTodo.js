import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import TButton from '../components/TButton';
import HeadingTitle from '../components/HeadingTitle';
import { useState } from 'react';
import { saveData, loadData } from '../datamodel/myData';

export default AddNewTodo = function ({ navigation, route}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { updateTasks } = route.params;

  const saveTodo = async () => {
    if (title === '' || description === '') return;

    try {
      const existingTasks = await loadData();
      const id = existingTasks.tasks.length + 1;
      const newTask = { id, title, description, completed: false };
      existingTasks.tasks.push(newTask);
      await saveData(existingTasks);
      setTitle('');
      setDescription('');
      Alert.alert('Todo added successfully!');
      updateTasks(); // Call the callback function to update tasks in Home.js
    } catch (error) {
      console.log('Error saving task:', error);
      Alert.alert('Error', 'Failed to save new task.');
    }
  };

  const navToHome = async () => {
    navigation.navigate('Home'); // Navigate back to the Home page
  };

  
  return (
    <View style={styles.container}>
      {/* header "My Todo List" */}
      <View style={styles.header}>
        <HeadingTitle text='Add New Todo' />
      </View>

      {/* display Title and Description */}
      <View style={styles.main}>
        {/* Title Input */}
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder='New Task'
          value={title}
          onChangeText={setTitle}
        />
        {/* Description Input */}
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder={`Here is detailed description of new task \n\n\n....`}
          multiline={true}
          numberOfLines={10} // Adjust this based on your preference
          value={description}
          onChangeText={setDescription}
        />
        <TButton
          icon='backspace'
          text='Back'
          color='green'
          onPress={navToHome}
        />
        <TButton
          icon='save'
          text='Save'
          color='green'
          onPress={saveTodo}
        />
      </View>

      {/* footer displays save and cancel option for new Todo */}
      <View style={styles.footer}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '95%',
    paddingBottom: 5,
  },

  main: {
    flex: 9,
    width: '95%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 10,
  },

  footer: {
    flexDirection: 'row',
    flex: 1.5,
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },

  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
