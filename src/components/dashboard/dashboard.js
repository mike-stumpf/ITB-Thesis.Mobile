import React  from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import userService from '../../services/user';

class Dashboard extends React.Component {

    loginRedirect(){
        this.props.navigation.dispatch(
            NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Login' })] })
        );
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        //is logged in check
        if (!this.props.userIsLoggedIn){
            this.loginRedirect();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.userIsLoggedIn) {
            this.loginRedirect();
        }
    }

    //handlers
    //---------------------------------
    handleLogoutSubmit = () => {
        this.props.handleLogout();
        this.loginRedirect();
    };


    //renders
    //---------------------------------
    render() {
        return (
            <View>
                <Text>Hello {userService.getUserFullName(this.props.currentUser)}</Text>
                <Button
                    onPress={() => this.handleLogoutSubmit()}
                    title="Log out"
                />
            </View>
        );
    }
}

export default Dashboard;