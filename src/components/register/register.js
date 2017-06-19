import React  from 'react';
import { Text,View,Button,TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';

import validationService from '../../services/validation';

class Register extends React.Component {

    goToDashboard(userIsLoggedIn){
        if (userIsLoggedIn) {
            this.props.navigation.dispatch(
                NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Dashboard' })] })
            );
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            emailError: false,
            passwordError: false,
            submissionError: false,
            firstNameError: false,
            lastNameError: false,
            repeatPasswordError: null
        };
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    componentDidMount(){
        this.goToDashboard(this.props.userIsLoggedIn);
    }

    componentWillReceiveProps(nextProps) {
        this.goToDashboard(nextProps.userIsLoggedIn);
    }

    //handlers
    //---------------------------------
    handleRegisterSubmit = () => {
        let emailValue = this.state.email,
            passwordValue = this.state.password,
            repeatPassword = this.state.repeatPassword,
            firstNameValue = this.state.firstName,
            lastNameValue = this.state.lastName,
            validEmail = validationService.isValidEmail(emailValue),
            validPassword = validationService.isValidPassword(passwordValue),
            validRepeatPassword = validationService.doPasswordsMatch(passwordValue, repeatPassword),
            validFirstName = !validationService.isValueEmpty(firstNameValue),
            validLastName = !validationService.isValueEmpty(lastNameValue);
        this.setState({
            emailError: !validEmail,
            passwordError: !validPassword,
            repeatPasswordError: !validRepeatPassword,
            firstNameError: !validFirstName,
            lastNameError: !validLastName,
            submissionError: null
        });
        if (validEmail && validPassword && validRepeatPassword && validFirstName && validLastName) {
            this.props.handleRegisterSubmit(firstNameValue, lastNameValue, emailValue, passwordValue);
        }
    };

    //renders
    //---------------------------------
    render() {
        //todo, forgot password screen
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
                    autoFocus = {true}
                    keyboardType = {'default'}
                    placeholder = {'First Name'}
                    spellCheck = {false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onChangeText={(firstName) => this.setState({firstName})}
                />
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
                    keyboardType = {'default'}
                    placeholder = {'Last Name'}
                    spellCheck = {false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onChangeText={(lastName) => this.setState({lastName})}
                />
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
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
                    keyboardType = {'default'}
                    placeholder = {'Password'}
                    secureTextEntry= {true}
                    spellCheck = {false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onChangeText={(password) => this.setState({password})}
                />
                <TextInput
                    style={{height: 50,textAlign: 'center',alignSelf: 'stretch'}}
                    numberOfLines = {1}
                    editable = {true}
                    maxLength = {100}
                    autoFocus = {true}
                    keyboardType = {'default'}
                    placeholder = {'Repeat Password'}
                    secureTextEntry= {true}
                    spellCheck = {false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    onChangeText={(repeatPassword) => this.setState({repeatPassword})}
                />
                <Button
                    onPress={() => this.handleRegisterSubmit()}
                    title="Submit"
                />
            </View>
        );
    }
}

export default Register;