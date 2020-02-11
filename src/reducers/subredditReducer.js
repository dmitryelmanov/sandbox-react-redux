import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/subredditActions';
import initialState from './initialState';

export function selectSubredditReducer(state = initialState.subreddit.selected, action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.payload.subreddit;
        default:
            return state;
    };
};

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    lastUpdated: null
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return ({
                ...state,
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return ({
                ...state,
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_POSTS:
            return ({
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.payload.posts,
                lastUpdated: action.payload.receiveAt
            });
        default: 
            return state;
    };
};

export function postsBySubredditReducer(state = initialState.subreddit.postsBySubreddit, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return ({
                ...state,
                [action.payload.subreddit]: posts(state[action.payload.subreddit], action)
            });
        default:
            return state;
    };
};