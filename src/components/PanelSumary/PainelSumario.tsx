import React from "react";
import {StyleSheet, View} from 'react-native'

import PainelSumarioChart from "./PainelSumarioChart";
import PainelSumarioList from "./PainelSumarioList";

const PainelSumario = () => {
    return(
        <View style={styles.container}>
            <PainelSumarioChart></PainelSumarioChart>
            <PainelSumarioList></PainelSumarioList>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
    flex: 1
   }
});

export default PainelSumario;