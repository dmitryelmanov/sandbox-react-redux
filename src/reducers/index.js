import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilterReducer';
import todos from './todosReducer';
import { 
    selectSubredditReducer,
    postsBySubredditReducer
} from './subredditReducer';

const todoAppReducers = combineReducers({
    visibilityFilter,
    todos,
    subreddit: combineReducers({
        selected: selectSubredditReducer,
        postsBySubreddit: postsBySubredditReducer
    })
});

export default todoAppReducers;