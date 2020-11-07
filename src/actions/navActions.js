import { FETCH_NAV, UPDATE_USER } from './types';

import acnh from '../api/acnhapi';

export const fetchNav = (navParam) => async dispatch => {
    const response = await acnh.get(navParam);
    dispatch({
        type: FETCH_NAV,
        param: navParam,
        payload: response.data
    });
}

export const updateUser = (currUser, isSignedIn) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        isSignedIn: isSignedIn,
        user: currUser,
    })
}