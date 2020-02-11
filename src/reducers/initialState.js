import { VisibilityFilters } from '../actions/visibilityFilterActions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
    subreddit: {
        selected: 'reactjs',
        postsBySubreddit: {}
    }
};

export default initialState;