import { FETCH_NAV } from '../actions/types';

const initialState = {
    navData: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_NAV:
            return {
                navData: action.payload
            }
        default: 
            return state;
    }
}