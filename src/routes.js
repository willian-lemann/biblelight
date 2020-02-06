import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Galery from './pages/Galery';

import Header from './components/Main/Header';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="BibleLight"
            headerMode="screen"
            screenOptions={{
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerStyle: {
                    backgroundColor: '#f05a5b',
                }
            }}
        >
            <Stack.Screen name="BibleLight" component={Main} options={{
                title: 'BibleLight',
                headerRight: () => <Header />,
            }} />
            <Stack.Screen name="Galery" component={Galery} />
        </Stack.Navigator>
    );
}

export default Routes;