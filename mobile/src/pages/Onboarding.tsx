import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage';

import onboarding01 from '../images/onboarding01.png';
import onboarding02 from '../images/onboarding02.png';

function NextButton({ ...props}) {
  return (
    <TouchableOpacity
      style={styles.nextButtonContainer}
      {...props}
    >
      <Feather name="arrow-right" size={25} color='#15B6D6'/>
    </TouchableOpacity>      
  );
};

function FirstScreenTitle() {
  return (
    <View>
      <Text style={styles.firstScreenTitleText}>
        Leve felicidade para o mundo
      </Text>
    </View>
  );
};

function FirstScreenSubtitle() {
  return (
    <View>
      <Text style={styles.firstScreenSubtitleText}>
        Visite orfanatos e mude o dia de muitas crianças.
      </Text>
    </View>
  );
};

function SecondScreenTitle() {
  return (
    <View>
      <Text style={styles.secondScreenTitleText}>
        Escolha um orfanato no mapa e faça uma visita
      </Text>
    </View>
  );
};

function OnboardingPage() {
  const navigation = useNavigation();

  const onDone = async () => {
    try {
      await AsyncStorage.setItem('first_access', 'false');
      navigation.navigate('OrphanagesMap');
    } catch {
      alert('Ocorreu um erro. Tente novamente')
    };
  };

  return (
    <Onboarding
      onDone={onDone}
      containerStyles={styles.container}
      bottomBarColor='#F2F3F5'
      bottomBarHeight={80}
      controlStatusBar={false}
      NextButtonComponent={NextButton}
      DoneButtonComponent={NextButton}
      showSkip={false}
      pages={[
        {
          backgroundColor: '#F2F3F5',
          image: <Image source={onboarding01} style={styles.firstScreenImage} />,
          title: <FirstScreenTitle />,
          subtitle: <FirstScreenSubtitle />,
        },
        {
          backgroundColor: '#F2F3F5',
          image: <Image source={onboarding02} style={styles.secondScreenImage} />,
          title: <SecondScreenTitle />,
          subtitle: '',
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 30,
  },

  nextButtonContainer: {
    backgroundColor: '#D1EDF2',
    borderRadius: 20,
    marginHorizontal: 20,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  firstScreenImage: {
    height: 200,
    resizeMode: 'center',
  },

  firstScreenTitleText: {
    fontSize: 40,
    color: '#0089A5',
    fontFamily: 'Nunito_800ExtraBold',
    lineHeight: 48,
    maxWidth: 217,
  },

  firstScreenSubtitleText: {
    fontSize: 20,
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold',
    lineHeight: 30,
    maxWidth: 234,
  },

  secondScreenImage: {
    height: 330,
    resizeMode: 'center'
  },

  secondScreenTitleText: {
    fontSize: 30,
    color: '#0089A5',
    fontFamily: 'Nunito_800ExtraBold',
    lineHeight: 36,
    textAlign: 'right',
    marginHorizontal: 20,
    maxWidth: 260
  }
})

export default OnboardingPage;