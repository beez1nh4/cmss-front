import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import TrafficLightPage from './pages/TrafficLight';
import SignInPage from './pages/SignIn';
import PedestrianPage from './pages/PedestrianPage';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/sentinel/:id' element={<TrafficLightPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/sentinel" element={<PedestrianPage />} />
      </Routes>
    </Router>
  </>
}

export default App;
