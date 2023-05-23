import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import { useDispatch } from 'react-redux';
// import { getPostsAction } from './redux/actions/actionCreator'
import Posts from './pages/Posts'
import About from './pages/About'
import { BrowserRouter, Routes, Route,  Link } from 'react-router-dom'

function App() {
  // const dispatch = useDispatch()

  // const handleGetPosts = () => {
  //   dispatch(getPostsAction())
  // }

  return (
    <BrowserRouter >
    <div className="App">
    <div>
      <Link to='/'>Список постов</Link>
      <Link to='/about'>Обо мне</Link>
      
     </div>
      {/* <Button variant="primary" onClick={handleGetPosts}> Get Posts </Button> */}
      <Routes>
        <Route path={'/'} element={<Posts />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
