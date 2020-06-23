/* eslint-disable no-use-before-define */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

Icon.loadFont();

const AddressCep = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const dataCep = routes.params;

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={25} color="#FFFF" />
      </TouchableOpacity>
      {!dataCep.erro ? (
        <View style={styles.card}>
          <Text>{dataCep.bairro}</Text>
          <Text>{dataCep.logradouro}</Text>
          <Text>{dataCep.localidade}</Text>
        </View>
      ) : (
        <View style={styles.error}>
          <Text style={styles.textError}>
            Endereço não localizado, tenta novamente!
          </Text>
        </View>
      )}
    </View>
  );
};

export default AddressCep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  card: {
    flex: 0.4,
    marginTop: 10,
    backgroundColor: '#FFFF',
    borderRadius: 8,
  },
  error: {
    marginTop: 10,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 8,
  },
  textError: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'red',
  },
});
