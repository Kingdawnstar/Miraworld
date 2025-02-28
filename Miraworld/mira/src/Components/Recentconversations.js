import React from 'react'
import './Recentconversations.css';
import Search from '../assetsmira/search.png'
import Dave from '../assetsmira/s1.jpg'
import S1 from '../assetsmira/s1.jpg'
import S2 from '../assetsmira/s2.jpg'
import S3 from '../assetsmira/s3.jpg'
import S4 from '../assetsmira/s4.jpg'
import S5 from '../assetsmira/s5.jpg'
import S6 from '../assetsmira/s6.jpg'
import S7 from '../assetsmira/s7.jpg'

const Recentconversations = () => {
  return (
    <div className='Recentconversations'>
      <div className='Conv-wrap'>
        <div className='start-chat'>
          <p><span>+</span> Start New Chat</p>
        </div>
        <div className='search-chat'>
          <img className='search' src={Search} alt=''/>
          <input type='text' placeholder='Search for chats' />
        </div>
        <h4>Recent Conversations</h4>
        <div className='rec-chats'>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={Dave} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats open'>
            <div className='chat-user'>
              <img className='chat-prof' src={Dave} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S2} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S3} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S7} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S1} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S5} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S6} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
          <div className='chats'>
            <div className='chat-user'>
              <img className='chat-prof' src={S4} alt=''/>
            </div>
            <div className='chat-info'>
              <p>Dave Cooper</p>
              <small>Hi,Nice to meet you...</small>
            </div>
            <div className='chat-time'>
              <p>10:32AM</p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recentconversations