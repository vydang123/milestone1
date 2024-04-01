import { Text, View, StyleSheet, Pressable } from 'react-native';

export default TodoBox = function({text}) {
  return (
    <View style = {styles.box}>
      <Text style = {styles.todo}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'lightblue',
    margin: 5,
    borderRadius: 5,
    padding: 7,
    width: '98%',
  },

  todo:{
    fontSize: 18,
  },
})