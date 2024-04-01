import { Pressable, StyleSheet, Text, View } from 'react-native';
import  TButton  from '../components/TButton';
import HeadingTitle from '../components/HeadingTitle';
import TodoBox from '../components/TodoBox';

export default Home = function ({navigation}) {
  const navToAddNewTodo = () => navigation.navigate('AddNewTodo');
  return (
    <View style={styles.container}>

      {/* header "My Todo List" */}
      <View style = {styles.header}>
        <HeadingTitle text = 'My Todo List' />
      </View>

      {/* display Todo list */}
      <View style = {styles.main}>
        <TodoBox text = 'Buy milk' />
        <TodoBox text = 'Buy bread' />
        <TodoBox text = 'Buy eggs' />
      </View>

      {/* footer displays add new Todo work */}
      <View style = {styles.footer}>
        <TButton icon = 'plus' width = '100%' text = 'ADD NEW TODO' onPress = {navToAddNewTodo} />
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
    flex: 1.5,
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

});
