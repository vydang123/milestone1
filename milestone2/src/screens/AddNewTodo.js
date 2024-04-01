import { Text, View, StyleSheet } from 'react-native';
import  TButton  from '../components/TButton';
import HeadingTitle from '../components/HeadingTitle';

export default AddNewTodo = function({navigation})  {
  const navToHome = () => navigation.navigate('Home');
    return (
    <View style={styles.container}>

      {/* header "My Todo List" */}
      <View style = {styles.header}>
        <HeadingTitle text = 'Add New Todo' />
      </View>

      {/* display Todo list */}
      <View style = {styles.main}>
        <View style = {styles.todoBox}>
          <Text style = {styles.todoText}>Buy milk</Text>
        </View>
      </View>

      {/* footer displays add new Todo work */}
      <View style = {styles.footer}>

        <TButton icon = 'delete' text = 'Cancel' onPress = {navToHome} />
        <TButton icon = 'save' text = 'Save' onPress = {navToHome} />
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
    // alignItems: 'center',
    justifyContent: 'flex-end',
    // borderBottomColor: 'black',
    // borderBottomWidth: 2,
    // width: '95%',
    paddingBottom: 5,
  },

  main: {
    flex: 9,
    width: '95%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 5,
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
});
