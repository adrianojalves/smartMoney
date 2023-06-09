import React from "react";
import {StyleSheet, View, Button} from 'react-native'

import BalancePanelLabel from "./BalancePanelLabel";
import BalancePanelChart from "./BalancePanelChart";

const BalancePanel = () => {
    return(
        <View style={styles.container}>
            <BalancePanelLabel></BalancePanelLabel>
            <BalancePanelChart></BalancePanelChart>
            <Button title="Adicionar"></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BalancePanel;