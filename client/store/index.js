import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; // logging tool in browser
import thunkMiddleware from 'redux-thunk'; // write action creators that return a function
import { composeWithDevTools } from 'redux-devtools-extension';
import projects from './projects';

const reducer = combineReducers({
  projects
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware);

export default store;
export * from './projects';