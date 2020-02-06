import React from 'react';
import { View, Text, FlatList, SafeAreaView, ListView } from 'react-native';

import galeryApi from '../services/GaleryService';
import { useState, useEffect } from 'react';

function Galery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        loadImages();
    }, []);

    async function loadImages() {
        const response = await galeryApi.get('/photos?page=1');
        setImages(response.data);
        console.log(images);
    }


    return (
        <SafeAreaView>
            <View>
                <Text>teste</Text>
            </View>
        </SafeAreaView>
    );
}

export default Galery;