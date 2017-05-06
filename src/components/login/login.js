import React  from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

class Login extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Dashboard', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

export default Login;