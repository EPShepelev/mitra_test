import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './pages/Posts';
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';

function App() {

  return (
    <BrowserRouter >
    <div className="container">
    <div>
      <Navigation />
     </div>
      <Routes>
        <Route path={'/'} element={<Posts />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
