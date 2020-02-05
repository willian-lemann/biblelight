import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
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
        fontSize: 30
    }
})

export default Header;
