import React from 'react';
// import ChatBot from 'react-chatbotify';
// import { BiSolidUserAccount } from 'react-icons/bi';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './AboutPage/About';
import ChatBot from './ChatBot/MyChatBot';
import ShowPage from './Display/ShowPage';
import Home from './HomePage/Home';
import Animal from './indiAnimal/Animal';
import Login from './Navbar/Login';
import SearchBar from './Navbar/SearchBar';
import Payment from './PaymentPage/Payment';
import PaymentSuc from './PaymentPage/PaymentSuc';
import Registration from './PetRagistration/Registration';
import UserAccount from './UserAccount/UserAccount';
export default function Routers() {
    return (
        <Routes>
           
           
            <Route path="/" element={<Navigate to="/adoptly" />} />

            <Route path="/adoptly/UserAccount" element={<UserAccount />} />
            <Route path="/adoptly/UserAccount/Registration" element={<Registration />} />
            <Route path="/adoptly" element={<Home />} />
            <Route path="/adoptly/help" element={<ChatBot />} />

            <Route path="/adoptly/Login" element={<Login/>} />
            
            <Route path="/adoptly/Search" element={<SearchBar/>} />


     
            <Route path="/adoptly/:category" element={<ShowPage />} />

          
            <Route path="/adoptly/:category/:id" element={<Animal />} />

            <Route path="/adoptly/:category/:id/Payment" element={<Payment/>} />
            <Route path="/adoptly/about" element={<About/>} />
            <Route path="/adoptly/:category/:id/Payment/Payment-Successful" element={<PaymentSuc/>} />
        </Routes>
    );
}