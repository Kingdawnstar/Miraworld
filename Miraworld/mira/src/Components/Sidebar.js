import React from 'react'
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import Home from '../assetsmira/home-outline.png'
import Carbon from '../assetsmira/carbon_collapse-categories.png' 
import Customer from '../assetsmira/headset.png'
import Setting from '../assetsmira/ep_setting.png'
import Navpic from '../assetsmira/s3.jpg'
import Chat from '../assetsmira/chat.png'
import Friends from '../assetsmira/lucide_users.png'
import Quick from '../assetsmira/quick.png'
import Video from '../assetsmira/ph_video-light.png'
import Wish from '../assetsmira/carbon_worship-jewish.png'
import Cart from '../assetsmira/solar_cart-broken.png'
import Logout from '../assetsmira/clarity_logout-line.png'
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className='side-bar'>
      <div className='profile-pic'>
      <Link to={'/Miraworld/Settings'}>
                    <img className="user-profile" src={Navpic} alt="pro" />
                </Link>
                <div className="desc">
                    <h4>Davis James</h4>
                    <p>@davis_james</p>
                </div>
                </div>
      <div className="shortcut-links">
      <Link to={'/Miraworld'}>
        <div className= {location.pathname==='/Miraworld'? "side-link active" : 'side-link'
          && location.pathname==='/Miraworld/'? "side-link active" : 'side-link'
        }>
          <img className={location.pathname==='/Miraworld'? "" : 'first'
            && location.pathname==='/Miraworld/'? "" : 'first'
          } src={Home} alt="ho" /><p>Home</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Products'}>
        <div className={location.pathname==='/Miraworld/Products'? "side-link active" : 'side-link' &&
          location.pathname==='/Miraworld/Productdetpage'? 'side-link active' : 'side-link' && location.pathname==='/Miraworld/Paydetailspg'? 'side-link active' : 'side-link'
        }>
          <img className='inv' src={Carbon} alt="" /><p>Products</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Shoppingcart'}>
        <div className={location.pathname==='/Miraworld/Shoppingcart'? "side-link active" : 'side-link'}>
          <img className='inv' src={Cart} alt="" /><p>Shopping Cart</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Order'}>
        <div className={location.pathname==='/Miraworld/Order'? "side-link active" : 'side-link'
           && location.pathname==='/Miraworld/Myorders'? "side-link active" : 'side-link'
        }>
          <img className='inv' src={Cart} alt="" /><p>My Orders</p>
        </div>
        </Link>
        <Link to ={'/Miraworld/Wishlist'}>
        <div className={location.pathname==='/Miraworld/Wishlist'? "side-link active" : 'side-link'}>
          <img className='inv' src={Wish} alt="" /><p>My Wishlist</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Featuredvideos'}>
        <div className={location.pathname==='/Miraworld/Featuredvideos'? "side-link active" : 'side-link'}>
          <img className='inv' src={Video} alt="vid" /><p>Featured Videos</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Quickpost'}>
        <div className='side-link'>
          <img src={Quick} alt="" /><p>Quick Post</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Chats'}>
        <div className={location.pathname==='/Miraworld/Chats'? "side-link active" : 'side-link'}>
          <img className='inv' src={Chat} alt="" /><p>Chat</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Userconnect'}>
        <div className='side-link'>
          <img src={Friends} alt="" /><p>User Connections</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Usersupport'}>
        <div className='side-link'>
          <img src={Customer} alt="" /><p>Help and Support</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Settings'}>
        <div className={location.pathname==='/Miraworld/Settings'? "side-link active" : 'side-link' && 
          location.pathname==='/Miraworld/Notpreference'? "side-link active" : 'side-link' 
          && location.pathname==='/Miraworld/Notmessages'? "side-link active" : 'side-link'}>
          <img className='inv' src={Setting} alt="" /><p>Settings</p>
        </div>
        </Link>
        <Link to={'/Miraworld/Login'}>
        <div className='side-link log'>
          <img src={Logout} alt="" /><p>Logout</p>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Sidebar