import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Posts from './pages/Posts';
import About from './pages/About'
import User from './pages/User'
import Navigation from './components/Navigation';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter >
    <div className="container">
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path={'/mitra_test'} element={<Posts />} />
        <Route path={'/mitra_test/about'} element={<About />} />
        <Route path={'/mitra_test/users/:id'} element={<User />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
