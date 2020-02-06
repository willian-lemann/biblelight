import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

import ViewText from '../components/Main/ViewText';
import bibleApi from '../services/BibleService';

function Main() {
    let random = Math.floor(Math.random() * 31) + 1;
    const [proverbios, setProverbios] = useState(null);
    const [chapter, setChapter] = useState(random);


    useEffect(() => {
        setChapter(random);
        getBibleInfo();
    }, []);

    async function getBibleInfo() {
        const response = await bibleApi.get(`/verses/nvi/pv/${chapter}`);

        setProverbios(response.data);
        setChapter(random);
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