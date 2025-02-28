import React from 'react'
import './Createacct.css';
import Pic from '../assetsmira/Createacctpic.jpg';
import Logo from '../assetsmira/Mira.png'
import Fb from '../assetsmira/fb-logo.png'
import G from '../assetsmira/google-logo.png'
import A from '../assetsmira/apple-logo.png'
import Eye from '../assetsmira/crosseye.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Createacct = () => {
  const [ isPassword, setIsPassword] = useState(true)

  const toggleIsPassword = () =>{
    setIsPassword(!isPassword)
  }

  return (
    <div className='Createacct'>
      <div className='Createacct-pic-cont'>
        <img className='Createacct-pic' src={Pic} alt=''/>
      </div>
      <div className='Createacct-form-cont'>
        <div className='Createacct-form-cont-wrap'>
          <div className='Createacct-form-area'>
            <div className='Createacct-form-area-heading'>
            <img className='Createacct-form-img' src={Logo} alt=''/>
            <h1>Create Account</h1>
            <p>Please enter your details</p>
            </div>
            <div className='form'>
            <div className='Full-name all'>
              <small>Full Name</small>
              <div className='search'>
              <input type='text' placeholder=''/>
              </div>
              </div>
              <div className='E-mail '>
              <small>Email</small>
              <div className='search'>
              <input type='text' placeholder=''/>
              </div>
              </div>
              <div className='Password '>
              <small>Password</small>
              <div className='search'>
              <input  type={isPassword ? 'text' : 'password'}/>
              <img onClick={toggleIsPassword} src={Eye} alt=''/>
              </div>
              </div>
              <div className='check-box'>
              <form>
                <input type='checkbox' />
              </form>
              <p className='remember'> I agree to the terms and policies</p>
            </div>
            <Link to={'/Miraworld'}>
            <button>Create account</button>
            </Link>
            <p className='signup'>Already have an account? <Link to={'/Miraworld/Login'}><span>Sign in</span></Link></p>
            </div>
            </div>
            <div className='login-img'>
              <img src={Fb} alt='f'/>
              <img src={G} alt='g'/>
              <img src={A} alt='a'/>
            </div>
        </div>
        <div className='or'>
          <h1>OR</h1>
        </div>
      </div>
    </div>
  )
}

export default Createacct