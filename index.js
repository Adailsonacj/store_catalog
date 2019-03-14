/**
 * @format
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import ListaItens from './src/components/ListaItens'

class Main extends Component {
   
    render() {
        console.log('Componente renderizado')
        return (
            <ListaItens />
        )
    }
}

AppRegistry.registerComponent('store_catalog', () => Main);
