import { FETCH_NAV } from '../actions/types';

const initialState = {
    navData: [],
    navParam: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_NAV:
            return {
                navData: action.payload,
                navParam: action.param
            }
        default: 
            return state;
    }
}