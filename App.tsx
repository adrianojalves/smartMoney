/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const addEntry = () => {
    window.alert('teste');
  };

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 22, 
                    fontWeight: 'bold',
                    marginBottom: 10, marginTop: 10}}>
          Saldo R$ 2.102,23
      </Text>
      <Button onPress={addEntry} title="Adicionar"></Button>

      <Text style={{fontSize: 22, 
                    fontWeight: 'bold',
                    marginBottom: 10, marginTop: 10}}>
        Categorias</Text>

      <FlatList
        data={[
          {key: "Alimentação: $10"},
          {key: "Aluguel: $110"},
          {key: "Lazer: $210"},
          {key: "Outros: $310"}
        ]}
        renderItem={({item})=> <Text>{item.key}</Text>}
      >
      </FlatList>


      <Text style={{fontSize: 22, 
                    fontWeight: 'bold',
                    marginBottom: 10, marginTop: 10}}>
        Últimos lançamentos</Text>

      <FlatList
        data={[
          {key: "Padaria: $10"},
          {key: "Hotel: $110"}
        ]}
        renderItem={({item})=> <Text>{item.key}</Text>}
      >
      </FlatList>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

