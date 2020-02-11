import { SET_VISIBILITY_FILTER } from '../actions/visibilityFilterActions';
import initialState from './initialState';

export default function visibilityFilterReducer(state = initialState.visibilityFilter, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}