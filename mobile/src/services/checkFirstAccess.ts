import AsyncStorage from '@react-native-community/async-storage';

const isFirstAccess = async () => {
  const data = await AsyncStorage.getItem('first_access');

  return data === null || data === 'true';
};

export default isFirstAccess;