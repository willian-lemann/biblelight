import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './pages/Main';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator initialRouteName="BibleLight">
            <Drawer.Screen name="BibleLight" component={Main} />
        </Drawer.Navigator>
    );
}

export default Routes;