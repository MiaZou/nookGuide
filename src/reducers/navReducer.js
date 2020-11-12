import { FETCH_NAV, FETCH_VILLAGERS, UPDATE_USER } from '../actions/types';

const initialState = {
    navData: [],
    isSignedIn: false,
    user: '',
    villagers: {},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_NAV:
            return {
                ...state,
                navData: action.payload,
            }
        case UPDATE_USER: 
            return {
                ...state,
                isSignedIn: action.isSignedIn,
                currentUser: action.user,
            }
        case FETCH_VILLAGERS:
            return {
                ...state,
                villagers: action.villagers,
            }
        default: 
            return state;
    }
}