import { FETCH_NAV } from './types';
import acnh from '../api/acnhapi';

export const fetchNav = (navParam) => async dispatch => {
    const response = await acnh.get(navParam);
    console.log(response.data);
    dispatch({
        type: FETCH_NAV,
        param: navParam,
        payload: response.data
    });
}