import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ProductPage from './ProductPage'


class App extends React.Component{

  state = {
    totalCarts: 0
  }

  updateTotalCarts = (jumlahCart) =>{
    this.setState({totalCarts: jumlahCart}) /* di setstate cartsnya trus ditrf lewat <Navbar> */
    console.log(jumlahCart)
    console.log(this.state.totalCarts)
  }

  render(){
    return(
      <>
          <BrowserRouter>
          <Navbar dataCart = {this.state.totalCarts}/> {/* disini transfer datanya tentuin dulu variable propsnya, dalam hal ini aku pake 'dataCart' */}
          <Switch>
          <Route to='/productpage' render={() => <ProductPage jumlahCart={this.updateTotalCarts} />} /* gajadi komponen lg tapi pakai render, di app dia nerima data tapi harus pakai function dulu */ />
          </Switch>
          </BrowserRouter>
      </>
    )
  }
}



export default App;
