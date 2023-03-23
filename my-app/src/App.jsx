import './App.css';
import Home from './views/Home';
import Single from './views/Single';
import Profile from './views/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './views/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Single />} />
          <Route path="/" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
