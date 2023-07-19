import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './styles.css'
import './smoke.css'
import './mystyles.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import Profile from './pages/Profile'
import CreateJob from './pages/CreateJob'
import MyJobs from './pages/MyJobs'

function App() {
  const [count, setCount] = useState(0)

  const [backendData, setBackendData] = useState([{}])



  useEffect(() => {

    fetch("/api/user")
      .then(
        response => response.json()
      )
      .then(
        data => {
          setBackendData(data);
        }
      ).then(
        console.log(backendData.map)
      )
  }, [])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<MainPage />} />
        <Route
          path="/profile"
          element={<Profile />} />
        <Route
          path="/create-job"
          element={<CreateJob />} />
        <Route
          path="/my-jobs"
          element={<MyJobs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
