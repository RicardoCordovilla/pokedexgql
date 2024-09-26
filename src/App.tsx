import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import ComparisionPage from './pages/ComparisionPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:item" element={<PokemonDetailsPage />} />
      <Route path="comparision" element={<ComparisionPage />} />
    </Routes>
  )
}

export default App
