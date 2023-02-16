import SubmitText from '../src/components/SubmitText';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import LogIn from '../src/components/LogIn';
import CreateAccount from '../src/components/CreateAccount';
import Post from '../src/components/Post';
import PostsList from '../src/components/PostsList';
import Previw from '../src/components/Previw';
import SuccessMessage from './components/SuccessMessage';
import { checkLogin } from './hooks/customHooks';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogedInUser } from './data/reducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = checkLogin();
    if (user) {
      dispatch(setLogedInUser(user));
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<SubmitText />} />
        <Route exact path="/previw" element={<Previw />} />
        <Route exact path="/logIn" element={<LogIn />} />
        <Route exact path="/createAccount" element={<CreateAccount />} />
        <Route exact path="/PostsList" element={<PostsList />} />
        <Route exact path="/successMessage" element={<SuccessMessage />} />
        <Route exact path="/post" element={<Post />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
