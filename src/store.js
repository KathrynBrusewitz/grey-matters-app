import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import { createMemoryHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers'; //Import the reducer

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create a history of your choosing (we're using a browser history in this case)
const history = createMemoryHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [thunk, routerMiddleware(history)];

export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
