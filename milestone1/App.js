import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.heading}>My Todo List</Text>
      </View>
      <View style = {styles.main}>

      </View>
      <View style = {styles.footer}></View>
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
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 5,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    // borderColor: 'black',
    // borderWidth: 1,
    
  },

  main: {
    flex: 6,
  },

  footer: {
    flex: 1,
  }
});
