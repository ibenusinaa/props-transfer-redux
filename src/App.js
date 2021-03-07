import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ProductPage from './ProductPage'

// REDUX
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducer from './Redux/Reducers/index'

const store = createStore(allReducer)

class App extends React.Component{

  render(){
    return(
      <>
        <Provider store={store}>

          <BrowserRouter>
            <Navbar /> 
            <Switch>
              <Route to='/productpage' component={ProductPage} />
            </Switch>
          </BrowserRouter> 
             
        </Provider>
      </>
    )
  }
}

export default App;


