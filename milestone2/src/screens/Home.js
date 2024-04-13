import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import {loadData, saveData} from '../datamodel/myData';
import TButton from '../components/TButton';
import HeadingTitle from '../components/HeadingTitle';
import TodoBox from '../components/TodoBox';
import { useState, useEffect } from 'react';

export default Home = function ({ navigation}) {
  const navToAddNewTodo = () => navigation.navigate('AddNewTodo', { updateTasks });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const firstLoad = async () => {
      updateTasks()
    };
    firstLoad();
  }, []);

  useEffect (() =>{
    saveData({tasks})
  }, [tasks])

  const updateTasks = async () => {
    const myData = await loadData();
    setTasks(myData.tasks);
    console.log('a')
  };
  
  const deleteTask = async (id) => {
    // Delete the task from the tasks array
    const updatedTasks = tasks.filter(task => task.id !== id);
    // Update the saved data
    await saveData({ tasks: updatedTasks });
    // Update the state to re-render the component
    setTasks(updatedTasks);
  }

 const completeTask = async (id) => {
    // Mark the task as completed in the tasks array
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    });
    // Update the saved data
    await saveData({ tasks: updatedTasks });
    // Update the state to re-render the component
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      {/* header "My Todo List" */}
      <View style={styles.header}>
        <HeadingTitle text='My Todo List' />
      </View>

      {/* display Todo list */}
      <View style={styles.main}>
        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <TodoBox
              task = {item}
              title={item.title}
              description={item.description}
              cmp={completeTask}
              del={deleteTask}
            />
          )}
          keyExtractor={t => t.id.toString()}
        />
      </View>

      {/* footer displays add new Todo work */}
      <View style={styles.footer}>
        <TButton
          color='green'
          icon='add-circle'
          width='100%'
          text='ADD NEW TODO'
          onPress={navToAddNewTodo}
        />
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
    paddingTop: 5,
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
