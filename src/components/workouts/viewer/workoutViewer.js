import React  from 'react';
import { Text, View, Button } from 'react-native';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getWorkoutData(this.props.navigation.state.params.workoutId);
    }

    //handlers
    //---------------------------------



    //renders
    //---------------------------------
    render() {
        return (
            <View>

            </View>
        );
    }
}

export default Dashboard;