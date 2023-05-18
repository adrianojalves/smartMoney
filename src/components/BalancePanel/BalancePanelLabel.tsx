import React from "react";
import {StyleSheet, Text, View} from 'react-native'

const BalancePanelLabel = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>R$ 102,45</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
    },
    value: {
        fontSize: 30
    }
});

export default BalancePanelLabel;