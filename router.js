import { StackNavigator } from 'react-navigation';

//views
import Login from './src/components/login/loginContainer';
import Dashboard from './src/components/dashboard/dashboardContainer';
import Register from './src/components/register/registerContainer';
import Workout from './src/components/workouts/workoutContainer';
import WorkoutLibrary from './src/components/workouts/library/workoutLibraryContainer';
import WorkoutViewer from './src/components/workouts/viewer/workoutViewerContainer';
import ForgotPassword from './src/components/login/forgotPassword/forgotPasswordContainer';

const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: 'Login',
        })
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            title: 'Dashboard',
        })
    },
    Register: {
        screen: Register,
        navigationOptions: ({navigation}) => ({
            title: 'Register',
        })
    },
    Workout: {
        screen: Workout,
        navigationOptions: ({navigation}) => ({
            title: 'New Workout',
        })
    },
    WorkoutLibrary: {
        screen: WorkoutLibrary,
        navigationOptions: ({navigation}) => ({
            title: 'Workout History',
        })
    },
    WorkoutViewer: {
        screen: WorkoutViewer,
        navigationOptions: ({navigation}) => ({
            title: 'View Workout',
        })
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: ({navigation}) => ({
            title: 'Forgot Password',
        })
    },
});

export default AppNavigator;