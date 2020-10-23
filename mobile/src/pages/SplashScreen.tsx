import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import isFirstAccess from '../services/checkFirstAccess';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    async function makeRedirect() {
      await isFirstAccess()
       ? navigation.navigate('Onboarding')
       : navigation.navigate('OrphanagesMap')
    };

    makeRedirect();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator color='#FFF' size={60}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15C3D6'
  }
});

export default SplashScreen;