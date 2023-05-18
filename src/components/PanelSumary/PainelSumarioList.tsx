import React from "react";
import {StyleSheet, Text, View, FlatList} from 'react-native'

const PainelSumarioList = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1  
    },
    label: {
        fontSize: 22, 
        fontWeight: 'bold',
        marginBottom: 10, 
        marginTop: 10
    }
});

export default PainelSumarioList;