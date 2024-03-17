import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

let ct = 0;
export default function App() {
  const getButtonStyle = ({pressed}) =>
    pressed ? [styles.pressed, styles.button] : [styles.button];
  return (
    <View style={styles.container}>

      {/* header "My Todo List" */}
      <View style = {styles.header}>
        <Text style = {styles.heading}>My Todo List</Text>
      </View>

      {/* display Todo list */}
      <View style = {styles.main}>
        <View style = {styles.todoBox}>
          <Text style = {styles.todoText}>Buy milk</Text>
        </View>
        <View style = {styles.todoBox}>
          <Text style = {styles.todoText}>Buy bread</Text>
        </View>
        <View style = {styles.todoBox}>
          <Text style = {styles.todoText}>Buy eggs</Text>
        </View>
      </View>

      {/* footer displays add new Todo work */}
      <View style = {styles.footer}>
        <Pressable 
        style = {getButtonStyle} 
        onPress = {() => {
          ct++;
          console.log(`I am clicked ${ct} times`);
        }}>
          <Text style = {styles.footerText}>ADD NEW TODO</Text>
        </Pressable>
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
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    
  },

  main: {
    flex: 6,
    width: '95%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 5,
    
  },

  footer: {
    flex: 1,
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5794F0',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginTop: 10,
  },

  footerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

  },

  pressed: {
    opacity: 0.5,
  },

  todoBox: {
    backgroundColor: 'lightblue',
    margin: 5,
    borderRadius: 5,
    width: '98%',
    padding: 7,

  },

  todoText: {
    fontSize: 18,

  },
});
