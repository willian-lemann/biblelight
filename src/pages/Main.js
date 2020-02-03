import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

function Main() {
    return (
        <SafeAreaView style={styles.container}>







            <TouchableOpacity style={styles.button} onPress={() => console.log('ola')}>
                <Text>Clique Aqui</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
       
    },

    button: {

    }

})

export default Main;