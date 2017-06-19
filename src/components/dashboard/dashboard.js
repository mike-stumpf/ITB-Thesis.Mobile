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
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={{marginTop: 15,textAlign: 'center'}}>Hello {userService.getUserFullName(this.props.currentUser)}</Text>
                <Button
                    onPress={() => navigate('Workout')}
                    title="New Workout"
                />
                <Button
                    onPress={() => navigate('WorkoutLibrary')}
                    title="View Workouts"
                />
                <Text style={{marginTop: 50,textAlign: 'center'}}>Finished with your session?</Text>
                <Button
                    onPress={() => this.handleLogoutSubmit()}
                    title="Log out"
                />
            </View>
        );
    }
}

export default Dashboard;