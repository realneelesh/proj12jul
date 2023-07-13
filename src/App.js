import './App.css';
import NavigationBar from './components/NavigationBar';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import About from './pages/About';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <NavigationBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
