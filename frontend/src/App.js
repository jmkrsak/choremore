import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/login'
import Register from './views/register'
import Landing from './views/landing'

function App() {
  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  </Routes>
  </BrowserRouter>

}

export default App;
