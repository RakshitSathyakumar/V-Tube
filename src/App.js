import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Premium from './components/Premium';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/premium" element={<Premium />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
