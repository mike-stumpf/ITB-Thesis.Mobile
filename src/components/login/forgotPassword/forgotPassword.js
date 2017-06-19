import React  from 'react';
import { View,Button,TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';

import validationService from '../../../services/validation';

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //handlers
    //---------------------------------
    handleSubmit = () => {
        let email = this.state.email;
        this.setState({
            emailError: !validationService.isValidEmail(email),
            submissionError: false
        });
        if (validationService.isValidEmail(email)) {
            this.props.handleForgotPasswordSubmit(email);
            this.props.navigation.dispatch(
                NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Login' })] })
            );
        }
    };

    //renders
    //---------------------------------
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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
                <Button
                    onPress={() => this.handleSubmit()}
                    title="Submit"
                />
            </View>
        );
    }
}

export default ForgotPassword;