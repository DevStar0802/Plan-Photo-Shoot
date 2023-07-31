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
import Results from './pages/Results'
import Signup from './pages/Signup'
import { UserProvider } from './utils/UserContext';

function App() {

  return (
    <Router>
      <UserProvider>
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
          <Route
            path="/job-page"
            element={<JobPage />} />
          <Route
            path="/login"
            element={<Login />} />
          <Route
            path="/signup"
            element={<Signup />} />
          <Route
            path="/results"
            element={<Results />} />
        </Routes>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
