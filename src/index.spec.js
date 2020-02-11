import { createStore } from 'redux';
import {
    addTodo,
    toggleTodo
} from './actions/todoActions';
import {
    setVisibilityFilter,
    VisibilityFilters
} from './actions/visibilityFilterActions';
import reducers from './reducers';

describe('smoke', () => {
    it('SMOKE', () => {
        const store = createStore(reducers);

        console.log(store.getState());

        const unsubscribe = store.subscribe(() => console.log(store.getState()));

        store.dispatch(addTodo('todo 1'));
        store.dispatch(addTodo('todo 2'));
        store.dispatch(addTodo('todo 3'));
        store.dispatch(toggleTodo(0));
        store.dispatch(toggleTodo(1));
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

        unsubscribe();

        expect(true);
    })
})

