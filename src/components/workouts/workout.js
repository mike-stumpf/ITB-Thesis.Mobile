import React  from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import _ from 'lodash';
import {NavigationActions} from 'react-navigation';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getExercisesData();
    }

    //handlers
    //---------------------------------
    handleCreateWorkoutSubmit = () => {
        let exercises = [];
        _.forOwn(this.state, function(value, key) {
            if (key.indexOf('exercise-')!==-1){
                if (value > 0) {
                    exercises.push({
                        id: key.split('-')[1],
                        actualReps: value
                    });
                }
            }
        });
        if(exercises.length > 0) {
            this.props.createWorkoutSubmit(exercises);
            this.props.navigation.dispatch(
                NavigationActions.back()
            );
        }
    };


    //renders
    //---------------------------------
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.exercises}
                    renderItem={({item}) => (
                        <View key={item.id} style={{flexDirection:'row',justifyContent: 'space-between'}}>
                            <Text style={{marginRight: '10%'}}>{item.name}: </Text>
                            <TextInput
                                style={{height: 50, width: 100,textAlign: 'center',alignSelf: 'stretch'}}
                                numberOfLines = {1}
                                editable = {true}
                                maxLength = {100}
                                autoFocus = {true}
                                defaultValue = {'0'}
                                keyboardType = {'number-pad'}
                                placeholder = {'Quantity'}
                                spellCheck = {false}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                onChangeText={(quantity) => this.setState({['exercise-'+item.id]:quantity})}
                            />
                        </View>
                    )}
                    keyExtractor={(item, index) => item.id}
                />
                <Button
                    onPress={() => this.handleCreateWorkoutSubmit()}
                    title="Submit"
                />
            </View>
        );
    }
}

export default Dashboard;