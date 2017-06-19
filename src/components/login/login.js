import React  from 'react';
import { Text,View,Button,TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';

import validationService from '../../services/validation';

class Login extends React.Component {

    dashboardRedirect(userIsLoggedIn){
        if (userIsLoggedIn) {
            this.props.navigation.dispatch(
                NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Dashboard' })] })
            );
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.currentUser.email,
            password: this.props.currentUser.password,
            emailError: false,
            passwordError: false,
            submissionError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.dashboardRedirect(this.props.userIsLoggedIn);
    }

    componentWillReceiveProps(nextProps) {
        this.dashboardRedirect(nextProps.userIsLoggedIn);
    }

    //handlers
    //---------------------------------
    handleSubmit = () => {
        let email = this.state.email,
            password = this.state.password;
        this.setState({
            emailError: !validationService.isValidEmail(email),
            passwordError: !validationService.isValidPassword(password),
            submissionError: false
        });
        if (validationService.isValidEmail(email) && validationService.isValidPassword(password)) {
            this.props.handleLoginSubmit(email, password);
        }
    };

    //renders
    //---------------------------------
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
                    autoFocus = {true}
                    defaultValue = {this.props.currentUser.email}
                    keyboardType = {'email-address'}
                    placeholder = {'Email Address'}
                    spellCheck = {false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
                    autoFocus = {true}
                    defaultValue = {this.props.currentUser.password}
                    keyboardType = {'default'}
                    placeholder = {'Password'}
                    secureTextEntry= {true}
                    spellCheck = {false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button
                    onPress={() => this.handleSubmit()}
                    title="Submit"
                />
                <Text style={{marginTop: 50}}>Don't have an account?</Text>
                <Button
                    onPress={() => navigate('Register')}
                    title="Register"
                />
            </View>
        );
    }
}

export default Login;