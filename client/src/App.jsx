import { useState } from 'react'
import Scaffold from './pages/Scaffold'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scaffold />
    </>
  )
}

export default App
