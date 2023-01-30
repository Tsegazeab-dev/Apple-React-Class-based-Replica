import React, { Component } from 'react'
import "./commonResource/css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Iphone from './Route-pages/iphone-page/Iphone';
import Error from './Route-pages/PageNotFound/Error'
import Products from './Route-pages/Learn-more/Products';
import Ipad from './Route-pages/Ipad-page/Ipad';
import Mac from './Route-pages/mac-page/Mac';
import Watch from './Route-pages/Watch-page/Watch';
import Tv from './Route-pages/Tv-page/Tv';
import Music from './Route-pages/Music-page/Music';
import Support from './Route-pages/Support-page/Support';


export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/mac' element={<Mac/>}/>
        <Route path='/iphone' element={<Iphone/>}/>
        <Route path='/iphone/:id' element={<Products/>}/>
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </div>
    )
  }
}

