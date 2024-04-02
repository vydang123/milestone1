import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import  TButton  from '../components/TButton';
import HeadingTitle from '../components/HeadingTitle';
import { useState } from 'react';

export default AddNewTodo = function({navigation})  {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navToHome = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>

      {/* header "My Todo List" */}
      <View style = {styles.header}>
        <HeadingTitle text = 'Add New Todo' />
      </View>

      {/* display Titile and Description */}
      <View style = {styles.main}>
        {/* Title Input */}
        <Text style = {styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="My new todo title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        {/* Description Input */}
        <Text style = {styles.title}>Description</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder={`This is the description of my new todo \nit supports multiple line input \n....`}
          multiline={true}
          numberOfLines={4} // Adjust this based on your preference
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>

      {/* footer displays save and cancle option for new Todo */}
      <View style = {styles.footer}>
        <TButton icon = 'backspace' text = 'Cancel' onPress = {navToHome} />
        <TButton icon = 'save' text = 'Save'/>
      </View>
    </View>
  );
}

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
    // borderColor: 'black',
    // borderWidth: 1,
    
  },

  footer: {
    flexDirection: 'row',
    flex: 1.5,
    // borderTopColor: 'black',
    // borderTopWidth: 1,
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    
  },

  todoBox: {
    backgroundColor: 'lightblue',
    margin: 5,
    borderRadius: 5,
    padding: 7,
    width: '98%',
    
  },

  todoText: {
    fontSize: 18,

  },

  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: 'purple',
    borderRadius: 6,
    color: 'white',
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
    height: 100, // Adjust height as needed
    textAlignVertical: 'top', // Align text at the top
    padding: 10,
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  }
});
