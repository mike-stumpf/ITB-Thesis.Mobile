import React  from 'react';
import { Text,View,Button,TextInput } from 'react-native';

import validationService from '../../services/validation';

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            password: this.props.user.password,
            emailError: false,
            passwordError: false,
            submissionError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    defaultValue = {this.props.user.email}
                    keyboardType = {'email-address'}
                    placeholder = {'Email Address'}
                    spellCheck = {false}
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
                    autoFocus = {true}
                    defaultValue = {this.props.user.email}
                    keyboardType = {'default'}
                    placeholder = {'Password'}
                    secureTextEntry= {true}
                    spellCheck = {false}
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