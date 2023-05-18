import React from "react";
import {StyleSheet, Text, View, FlatList} from 'react-native'

import LancamentoItem from "./LancamentoItem";

const Lancamento = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label:{fontSize: 22, 
           fontWeight: 'bold',
           marginBottom: 10, 
           marginTop: 10
        }
});

export default Lancamento;