
import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import Itens from './Itens'
import axios from 'axios'

export default class ListaItens extends Component {

    constructor(props) {
        super(props)

        this.state = { listaItens: [] }
    }
    //  Executa antes de renderizar o componente
    componentWillMount() {
        //  Faz requisição HTTP e retorna os dados
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens: response.data }) })
            .catch(() => { console.log('Erro ao recuperar dados') })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DDD' }}>
                {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
            </ScrollView>
        )
    }
}