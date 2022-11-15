import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux/es/exports'
import Home from './Components/Contents/Home/Home';
import Login from './Components/Contents/Login/Login';
import InfoFilm from './Components/Contents/Home/Film/InfoFilm/InfoFilm';
import BuyTicket from './Components/Contents/Home/Film/InfoFilm/BuyTicket/BuyTicket';


import Cinema from './Components/Contents/Home/Film/InfoFilm/Cinema/Cinema';
import Soon from './Components/Contents/Home/Film/Showing/Soon';
import Now from './Components/Contents/Home/Film/Showing/Now';
import InfoFilmsSoon from './Components/Contents/Home/Film/InfoFilm/InfoFilmsSoon';
import Comment from './Components/Contents/Home/Film/InfoFilm/Comment/Comment';
import Header from './Components/Contents/Home/Header/Header';
import Footer from './Components/Contents/Home/Footer/Footer';
import Success from './Components/Contents/Home/Film/InfoFilm/BuyTicket/Success/Success';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/infofilm" element={<InfoFilm />}/>
            <Route path="/buyticket" element={<BuyTicket />}/>
            <Route path="/infofilmSoon" element={<InfoFilmsSoon />}/>
            <Route path="/cinema" element={<Cinema />}/>
            <Route path="/soon" element={<Soon />}/>
            <Route path="/now" element={<Now />}/>
            <Route path="/success" element={<Success />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginFunc: (type, payload) => {
      dispatch({ type: "Login" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)