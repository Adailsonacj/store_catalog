
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native';

export default class Itens extends Component {
    tocou() {
        alert('item tocado!')
    }
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
                </View >
                <View style={styles.detalhesItens}>
                    <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
                    <Text style={styles.txtValor}>R$ {this.props.item.valor}</Text>
                    <Text style={styles.txtDescricao}>Local: {this.props.item.local_anuncio}</Text>
                    <Text style={styles.txtDescricao}>Data da Publicação: {this.props.item.data_publicacao}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    foto: {
        width: 102,
        height: 102
    },
    detalhesItens: {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo: {
        fontSize: 18,
        color: '#102027',
        marginBottom: 5
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDescricao: {
        fontSize: 16,
    }
})