import React from 'react';
import { Text, View } from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import flatsReducer from './redux/reducers/flat.reducer';

const rootReducer = combineReducers({
  flats: flatsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
     <Provider store={store}>
       <View></View>
     </Provider>
  );
}

