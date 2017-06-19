import React  from 'react';
import { Text, View, FlatList } from 'react-native';
import moment from 'moment';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getWorkoutData(this.props.navigation.state.params.workoutId);
    }


    //renders
    //---------------------------------
    render() {
        return (
            <View>
                <Text>{moment(this.props.currentWorkout.dateCreated).format('DD/MM/YYYY @ hh:mm')}</Text>
                <FlatList
                    data={this.props.currentWorkout.exercises}
                    renderItem={({item}) => (
                        <View key={item.id} style={{flexDirection:'row',justifyContent: 'space-between'}}>
                            <Text>{item.name}</Text>
                            <Text style={{marginLeft:'10%',marginRight: '10%'}}>{item.actualReps} reps</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}

export default Dashboard;