import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { getPostsAction } from './redux/actions/actionCreator'

function App() {
  const dispatch = useDispatch()

  const handleGetPosts = () => {
    dispatch(getPostsAction())
  }

  return (
    <div className="App">
      <Button variant="primary" onClick={handleGetPosts}> Get Posts </Button>
    </div>
  );
}

export default App;
