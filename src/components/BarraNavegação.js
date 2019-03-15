
import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native';

export default class BarraNavegacao extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={Styles.barraTitulo}>
                <StatusBar backgroundColor='#102027' />
                <Text style={Styles.titulo}>Teste</Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#37474f',
        padding: 10,
        height: 60
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})