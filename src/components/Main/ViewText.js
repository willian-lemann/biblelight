import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Clipboard, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



function ViewText({ item }) {
    let random = Math.floor(Math.random() * 6) + 1;
    const [randomNum, setRandomNum] = useState(random);

    useEffect(() => {
        setRandomNum(random);
    }, [item]);


    const { name } = item.book;
    const chapterNumber = item.chapter.number;
    const { number, text } = item.verses[randomNum];
    console.log(number)

    function setContent() {
        Clipboard.setString(`${text} ${name}:${chapterNumber}.${number}`);
        showMessage();
    }

    const showMessage = async () => {
        let content = await Clipboard.getString();
        if (content != null)
            ToastAndroid.show('Copiado', ToastAndroid.SHORT);
    }

    return (
        <View style={styles.viewText}>
            <View style={styles.infoContainer}>
                <Text style={styles.bookName}>{name}</Text>
                <Text style={styles.chapter}> {chapterNumber}</Text>
            </View>
            <TouchableOpacity style={styles.verseTextContainer} onPress={setContent}>
                <Text style={styles.verseText}>
                    Versículo {number}: <Text style={styles.text}>{text}  <MaterialIcons style={styles.icon} name="content-copy" /></Text>
                </Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({

    viewText: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flex: 1,
    },

    bookName: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    chapter: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    verseTextContainer: {
        padding: 20,
        fontSize: 16,
        textAlign: 'justify'
    },

    verseText: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 18
    },

    text: {
        fontWeight: '100',
        fontSize: 16,
        fontFamily: 'Roboto',
    },

    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    icon: {
        fontSize: 18,
    },

})

export default ViewText;