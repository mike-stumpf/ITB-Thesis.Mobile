import React  from 'react';
import { Text, View, Button } from 'react-native';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getWorkoutData(20);
    }

    //handlers
    //---------------------------------



    //renders
    //---------------------------------
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.goBack(null)}
                    title="Back"
                />
            </View>
        );
    }
}

export default Dashboard;