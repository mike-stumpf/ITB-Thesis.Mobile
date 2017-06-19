import React  from 'react';
import { Text, FlatList, View, Button } from 'react-native';
import moment from 'moment';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getWorkoutsData();
    }


    //renders
    //---------------------------------
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={this.props.workouts}
                    renderItem={({item}) => (
                        <View key={item.id} style={{flexDirection:'row'}}>
                            <Text>{moment(item.dateCreated).format('DD/MM/YYYY @ hh:mm')}</Text>
                            <Text style={{marginLeft:'10%',marginRight: '10%'}}>{item.exercises} exercises</Text>
                            <Button
                                onPress={() => navigate('WorkoutViewer', { workoutId: item.id })}
                                title={'View'}/>
                        </View>
                    )}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}

export default Dashboard;