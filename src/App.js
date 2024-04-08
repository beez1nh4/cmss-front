import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import SignInPage from './pages/SignIn';
import SentinelDisplay from './pages/SentinelDisplay';
import SentinelPage from './pages/SentinelPage';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/sentinel/:id' element={<SentinelDisplay />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/sentinel" element={<SentinelPage />} />
      </Routes>
    </Router>
  </>
}

export default App;
