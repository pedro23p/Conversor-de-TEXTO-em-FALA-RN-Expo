import React, {useState} from 'react';
import { StyleSheet, TextInput ,View, Button  } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('Bem vindo, Programador')

  function speak(){
    Speech.speak(text,{
      language:'pt-BR'
    });
  }


  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      onChangeText={e => setText(e)}
      placeholder="Digite o que deseja reproduzir"
      />

      <Button
      title="Falar"
      onPress={speak}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'90%',
    height: 50,
    borderWidth:1,
    borderColor:'#121212',
    borderRadius:10,
    padding:10,
    margin:10,
    color:'#000',
    fontSize:18
  }
});
