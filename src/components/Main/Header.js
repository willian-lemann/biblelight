import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Users')}>
                <MaterialIcons name="menu" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        fontSize: 40,
        color: '#fff'
    }
})

export default Header;
