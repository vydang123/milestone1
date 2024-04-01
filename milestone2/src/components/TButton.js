import { Text, View, StyleSheet, Pressable } from 'react-native';

let ct = 0;
const TButton = ({text, onPress, width, icon}) => {
  const getButtonStyle = ({pressed}) =>
    pressed ? [styles.pressed, styles.button, {width}] : [styles.button, {width}];
  return (
    <Pressable 
      style={getButtonStyle} 
      onPress={() => {
        ct++;
        console.log(`I am clicked ${ct} times`);
        onPress();
      }}>
      <View style={styles.buttonContent}>
        <Text style={styles.textMess}>{text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },

  textMess: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,

  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  
  },

  pressed: {
    opacity: 0.5,
  },

});

export default TButton;