import { Text, View, StyleSheet, Pressable } from 'react-native';
import TButton from './TButton';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default TodoBox = function ({ task, cmp, del }) {
  const { id, title, description, completed } = task;
  const [expanded, setExpanded] = useState(false);

  const handleCompleteTask = () => {
    cmp(id); // Call the completeTask function passed from the Home component
  };

  const handleDeleteTask = () => {
    del(id); // Call the deleteTask function passed from the Home component
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.box}>
      <Pressable onPress={toggleExpand}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name={expanded ? 'caret-up' : 'caret-down'} size={24} color="green" />
        </View>
      </Pressable>
      
      {expanded && (
        <>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.buttonContainer}>
            {!completed && (
              <TButton
                icon='cloud-done'
                color='green'
                onPress={handleCompleteTask}
              />
            )}
            <TButton
              icon='trash'
              color='red'
              onPress={handleDeleteTask}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'lightblue',
    margin: 5,
    borderRadius: 5,
    padding: 7,
    width: 365,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },

  description: {
    fontSize: 16,
    padding: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
