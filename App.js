import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SEXBET</Text>
      <Text style={styles.titulo2}>Sign In to your account</Text>
      <TextInput 
      placeholder="email"
      style={styles.textInput}>

      </TextInput>
      <TextInput placeholder="password"
      style={styles.textInput}></TextInput>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011640',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    color: 'white',
    //fontWeight: 'bold'
  
  },

  titulo2: {
    fontSize: 12,
    color: 'gray',
    //fontWeight: 'bold'
  
  },
  textInput:{
    borderWidth:1,
    borderColor: 'gray',
    borderRadius:30,
    padding: 10,
    width:'70%',
    height:50,
    marginTop:30,
    backgroundColor:'white',
    paddingStart: 20,
    
  }

});
