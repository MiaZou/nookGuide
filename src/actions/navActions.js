import { FETCH_NAV, FETCH_VILLAGERS, UPDATE_USER } from './types';
import { acnhapi, userDataApi } from '../api/api';

export const fetchNav = (navParam) => async dispatch => {
    const response = await acnhapi.get(navParam);
    dispatch({
        type: FETCH_NAV,
        payload: response.data
    });
}

export const fetchVillagers = (userId) => async dispatch => {
    console.log('USERID', userId);
    // const response = await userDataApi.get(`/villagers/${userId}`);
    // console.log(response.data, 'FETCHVILLAGER RESPONSE');
    // dispatch({
    //     type: FETCH_VILLAGERS,
    //     villagers: response.data,
    // })
}

export const updateUser = (currUser, isSignedIn) => dispatch => {
    console.log(currUser);
    dispatch({
        type: UPDATE_USER,
        isSignedIn: isSignedIn,
        user: currUser
    })
}