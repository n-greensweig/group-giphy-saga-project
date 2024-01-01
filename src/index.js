import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import { takeLatest, put, takeEvery } from 'redux-saga/effects';



// const favorites = (state = [], action) => {
//   if (action.type === 'SET_FAVORITES') {
//     return action.payload;
//   }
//     return state;
//   }

const favorites = (state = [], action) => {
  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  }
    return state;
  }

const categories = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

  function* setCategories() {
    try {
    const response = yield axios.get('/api/favorites')
    const action = { type: 'SET_CATEGORIES', payload: response.data};
    yield put (action); 
    } catch (error) {
      console.log('error in setFavorites', error);
    }
  }

  function* setFavorites() {
    try {
    const response = yield axios.get('/api/favorites')
    const action = { type: 'SET_FAVORITES', payload: response.data};
    yield put (action); 
    } catch (error) {
      console.log('error in setFavorites', error);
    }
  }

function* rootSaga(){
  yield takeLatest('FETCH_FAVORITES', setFavorites);
  yield takeLatest('FETCH_CATEGORIES', setCategories);
}





const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  combineReducers({ favorites, categories }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>  
  </React.StrictMode>
);
