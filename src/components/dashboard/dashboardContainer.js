import {connect} from 'react-redux';

import { actions as userActions } from '../../ducks/ducks/user';
import authorizationService from '../../services/authorization';

import Dashboard from './dashboard';

const mapStateToProps = (state) => {
    let userState = state.userState,
        currentUser = userState.currentUser;
    console.log('current user',state.userState.currentUser);
    return ({
        currentUser: currentUser,
        userIsLoggedIn: authorizationService.isUserLoggedIn(state),
        response: userState.response
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        handleLogout: () => {
            dispatch(userActions.logout());
        }
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);