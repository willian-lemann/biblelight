import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

import ViewText from '../components/ViewText';
import api from '../service/api';

function Main() {
    let random = Math.floor(Math.random() * 31) + 1;
    const [proverbios, setProverbios] = useState(null);
    const [chapter, setChapter] = useState(random);


    useEffect(() => {
        setChapter(random);
    }, []);

    async function getBibleInfo() {
        const response = await api.get(`/verses/nvi/pv/${chapter}`);

        setProverbios(response.data);
        console.log(proverbios)
    }

    return (
        <SafeAreaView style={styles.container}>

            {proverbios && < ViewText item={proverbios} />}

            <TouchableOpacity style={styles.button} onPress={getBibleInfo}>
                <Text style={styles.buttonText}>Provérbio do dia</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    button: {
        width: 150,
        height: 150,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f05a5b',
        marginBottom: 10
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }

})

export default Main;