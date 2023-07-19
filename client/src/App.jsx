import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './styles.css'
import './smoke.css'
import './mystyles.css'
import Scaffold from './pages/Scaffold'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scaffold />
    </>
  )
}

export default App
