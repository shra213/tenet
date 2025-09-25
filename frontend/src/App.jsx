import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import UpdatePassword from './components/UpdatePass/UpdatePass';
import ChangeUserDetails from './components/Dashboard/Changedetails';
import Reward from './pages/Reward/Reward';
import FAQ from './pages/Faq/Faq';
import Contact from './pages/contact/Contact';
import About from './pages/About/About';
import CollaboDash from './components/CollaboDash';
import Admin from './components/Admin';
import RewardsList from './components/Dashboard/userReward/RewardList';
import Myrewards from './components/Myrewards';
const App = () => {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element= {<Login/>}/>
          <Route path="/Register" element = {<Register/>}/>
          <Route path="/userDashboard" element={<Dashboard/>}/>
          <Route path="/UpdatePassword" element={<UpdatePassword/>}/>
          <Route path="/ChangeUserDetails" element={<ChangeUserDetails/>}/>
          <Route path='/reward' element={<Reward/>}/>
          <Route path='/faq' element = {<FAQ/>}/>
          <Route path='/contactUs' element = {<Contact/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path="/collabDashboard" element={<CollaboDash />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/showrewards" element={<RewardsList/>}/>
          <Route path="/myrewards" element = {<Myrewards/>}/>
        </Routes>
      </Router> 
    </div>
  );
};


export default App
