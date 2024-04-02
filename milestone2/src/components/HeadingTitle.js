import { Text, View, StyleSheet, Pressable } from 'react-native';

export default HeadingTitle = function({text}) {
  return (
    <View style = {styles.box}>
      <Text style = {styles.message}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomColor: 'black',
    // borderBottomWidth: 2,
    width: 340,
    paddingBottom: 1,
  },

  message:{
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
})