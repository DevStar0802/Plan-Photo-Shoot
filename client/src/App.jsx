import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
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
import JobPage from './pages/JobPage'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  const [backendData, setBackendData] = useState([{}])



  useEffect(() => {

    fetch("/api/job")
      .then(
        response => response.json()
      )
      .then(
        data => {
          setBackendData(data);
        }
      ).then(
        console.log(backendData)
      )
  }, [])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<MainPage data={backendData[0]} />} />
        <Route
          path="/profile"
          element={<Profile />} />
        <Route
          path="/create-job"
          element={<CreateJob />} />
        <Route
          path="/my-jobs"
          element={<MyJobs />} />
        <Route
          path="/job-page"
          element={<JobPage />} />
        <Route
          path="/login"
          element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
