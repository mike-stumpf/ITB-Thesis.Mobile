import React  from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

//views
import Login from './src/components/login/login';
import Dashboard from './src/components/dashboard/dashboard';

const mobile = StackNavigator({
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
});


AppRegistry.registerComponent('mobile', () => mobile);