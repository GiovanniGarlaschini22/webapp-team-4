import { Routes, Route } from 'react-router-dom'
import GuestLayout from './layout/GuestLayout'
import Home from './pages/Home'
import Rubrica from './pages/Rubrica'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="rubrica" element={<Rubrica />} />
      </Route>
    </Routes>
  )
}

export default App;