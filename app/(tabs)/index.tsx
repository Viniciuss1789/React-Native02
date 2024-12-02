import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/161778225?s=400&u=ba98edc11845bc3a80ef12c01e5be472cbe5857c&v=4' }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Vinicius</Text>
      <Text style={styles.text}>https://github.com/Viniciuss1789</Text>
      <Text style={styles.description}>
      Aluno da Faculdade Flamingo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#24070d',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#ffffff',
  },
  description: {
    fontSize: 14,
    color: '#e3748a',
    textAlign: 'center',
  },
  text: {
  color:'#b85e70',
  },
});