/**
 * @format
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import ListaItens from './src/components/ListaItens'

class Main extends Component {
    constructor(props) {
        super(props)
        console.log('construindo a aplicação')
    }

    componentWillMount() {
        console.log('Fazendo algo antes de renderizar')

    }

    componentDidMount() {
        console.log('Fazendo algo depois de renderizar')

    }

    render() {
        console.log('Componente renderizado')
        return (
            <ListaItens />
        )
    }
}

AppRegistry.registerComponent('store_catalog', () => Main);
