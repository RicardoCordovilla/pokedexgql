import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:id" element={<PokemonDetailsPage />} />
    </Routes>
  )
}

export default App
