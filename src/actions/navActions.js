import { FETCH_NAV } from './types';
import acnh from '../api/acnhapi';

export const fetchNav = (navParam) => dispatch => {
    const response = await acnh.get(param);
    response => dispatch({
        type: FETCH_NAV,
        payload: response.data
    });
    
}