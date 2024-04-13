import AsyncStorage from '@react-native-async-storage/async-storage';
const key = 'to-do-list';
const dummyData = {tasks:[]}
export async function loadData() {
  try {
    const str = await AsyncStorage.getItem(key);
    if (str !== null) {
      const mydata = JSON.parse(str);
      return mydata;
    }
    return dummyData;
  } catch (e) {
    console.log(`Failed to read data with key ${key}`, e);
    return dummyData;
  }
}
export async function saveData(mydata) {
  const str = JSON.stringify(mydata);
  try {
    await AsyncStorage.setItem(key, str);
  } catch (e) {
    console.log('Failed to save data', e);
  }
}
