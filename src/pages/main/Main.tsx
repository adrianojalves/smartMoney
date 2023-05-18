import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import BalancePanel from "../../components/BalancePanel/BalancePanel";
import Lancamento from "../../components/Lancamentos/Lancamento";
import PainelSumario from "../../components/PanelSumary/PainelSumario";

const Main = () => {
    return(
        <View style={styles.container}>
            <BalancePanel></BalancePanel>
            <PainelSumario></PainelSumario>
            <Lancamento></Lancamento>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    label: {
        fontSize: 20,
    }
});

export default Main;