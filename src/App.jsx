import { Routes, Route } from 'react-router-dom'
import GuestLayout from './layout/GuestLayout'
import Home from './pages/Home'
import Rubrica from './pages/Rubrica'
import AggiungiViaggio from './pages/AggiungiViaggio'
import ViaggiPage from "./components/ViaggiPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="rubrica" element={<Rubrica />} />
        <Route path="/aggiungi-viaggio" element={<AggiungiViaggio />} />
        <Route path="/viaggi" element={<ViaggiPage />} />
      </Route>
    </Routes>
  )
}

export default App;