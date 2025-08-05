import React, { useState } from 'react';
import './index.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Wishliststore from './Pages/Wishliststore';
import Stores from './Pages/Stores';
import Notsec from './Pages/Notsec';
import Storeblog from './Pages/Storeblog';
import Storeprodet from './Pages/Storeprodet';
import Storecat from './Pages/Storecat';
import Products from './Pages/Products';
import Shoppingcart from './Pages/Shoppingcart';
import Chats from './Pages/Chats';
import Login from './Pages/Login';
import Createacct from './Pages/Createacct';
import Featuredvideos from './Pages/Featuredvideos';
import Playvideo from './Pages/Playvideo';
import Settings from './Pages/Settings';
import Notpreference from './Pages/Notpreference';
import Notmessages from './Pages/Notmessages';
import Order from './Pages/Order';
import Quickpost from './Pages/Quickpost';
import Productswish from './Pages/Productswish';
import { Myorders } from './Components/Myorders';
import Productdetpage from './Pages/Productdetpage';
import { Paydetailspg } from './Pages/Paydetailspg';
import Userconnect from './Pages/Userconnect';
import Usersupport from './Pages/Usersupport';
import { AppProvider } from './cartContext';// Adjust the import path to your combined context

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={!isDarkMode ? 'light-mode' : 'dark-mode'}>
            <AppProvider>
                <Routes>
                    <Route path='/Miraworld' element={<Home toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Wishliststore' element={<Wishliststore toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Products' element={<Products toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Shoppingcart' element={<Shoppingcart toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Chats' element={<Chats toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Login' element={<Login />} />
                    <Route path='/Miraworld/Createacct' element={<Createacct />} />
                    <Route path='/Miraworld/Featuredvideos' element={<Featuredvideos toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Playvideo' element={<Playvideo toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Settings' element={<Settings toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Notmessages' element={<Notmessages toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Notpreference' element={<Notpreference toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Order' element={<Order />} />
                    <Route path='/Miraworld/Quickpost' element={<Quickpost />} />
                    <Route path='/Miraworld/Userconnect' element={<Userconnect />} />
                    <Route path='/Miraworld/Usersupport' element={<Usersupport  toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Productdetpage' element={<Productdetpage toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Paydetailspg' element={<Paydetailspg toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Myorders' element={<Myorders toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Productswish' element={<Productswish toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Stores' element={<Stores toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Storecat' element={<Storecat toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Storeprodet' element={<Storeprodet toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Storeblog' element={<Storeblog toggleDarkMode={toggleDarkMode} />} />
                    <Route path='/Miraworld/Notsec' element={<Notsec toggleDarkMode={toggleDarkMode} />} />
                   
                </Routes>
            </AppProvider>
        </div>
    );
}

export default App;