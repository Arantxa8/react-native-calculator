import React from "react";
import { Provider} from "react-redux";
import { createStore } from 'redux';
import Calculator from "./src/screens/Calculator";
import { reducer } from './src/actions/actions';

//Create Store
const store = createStore(reducer);

const App = () => {
  return(
  <Provider store={store}>
    <Calculator/>
  </Provider>
  )
}

export default App;