import './App.css'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation.jsx';
import Home from './views/Home.jsx'
import CartView from './views/CartView.jsx'
import Context from './contexts/Context.js'
import pizzas from './assets/pizzas.json'
import PizzaView from './views/PizzaView.jsx'

function App() {

  const [data, setData] = useState(pizzas)
  const sharedState = {data, setData}

  return (
    <div className="App">
      <Context.Provider value={sharedState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartView/>} />
          <Route path="/pizza/:id" element={<PizzaView />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
