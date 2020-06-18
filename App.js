import React, { useState } from 'react';

import * as Font from 'expo-font';

import { AppLoading } from 'expo';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import flatsReducer from './redux/reducers/flat.reducer';

import FlatNavigator from './navigation/FlatNavigator';


const rootReducer = combineReducers({
  flats: flatsReducer
});

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})
}

const store = createStore(rootReducer);

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false)

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={error => console.log(error)}
			/>
		)
	}

  return (
	     <Provider store={store}>
	       <FlatNavigator />
	     </Provider>
  );
}

