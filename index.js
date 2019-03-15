/**
 * @format
 */

import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native';
import ListaItens from './src/components/ListaItens'
import BarraNavegacao from './src/components/BarraNavegação'

class Main extends Component {

    render() {
        console.log('Componente renderizado')
        return (
            <View>
                <BarraNavegacao />
                <ListaItens />
            </View>
        )
    }
}

AppRegistry.registerComponent('store_catalog', () => Main);
