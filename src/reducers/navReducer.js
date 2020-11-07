import { FETCH_NAV, UPDATE_USER } from '../actions/types';

const initialState = {
    navData: [],
    navParam: '',
    isSignedIn: false,
    user: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_NAV:
            return {
                ...state,
                navData: action.payload,
                navParam: action.param
            }
        case UPDATE_USER: 
            return {
                ...state,
                isSignedIn: action.isSignedIn,
                currentUser: action.user,
            }
        default: 
            return state;
    }
}