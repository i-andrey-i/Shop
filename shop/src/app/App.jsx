import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from '../pages/mainPage/mainPage'
import './App.module.scss'
import ProductPage from '../pages/productPage/productPage'
import BasketPage from '../pages/basketPage/basketPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
