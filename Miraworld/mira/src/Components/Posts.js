import React, { useState } from 'react';
import './Posts.css';
import Topsellingitems from './Topsellingitems';
import Stories from '../Components/Stories';
import CommentPopup from './Commentpopup'; // Import the Popup
import S1 from '../assetsmira/s1.jpg';
import S2 from '../assetsmira/s2.jpg';
import S3 from '../assetsmira/s3.jpg';
import St1 from '../assetsmira/st1.jpg';
import S6 from '../assetsmira/s6.jpg';
import S5 from '../assetsmira/s5.jpg';
import S7 from '../assetsmira/s7.jpg';
import Share from '../assetsmira/tabler_send.png';
import Messages from '../assetsmira/mingcute_comment-line.png';
import Like from '../assetsmira/ph_heart-fill.png';
import More from '../assetsmira/ri_more-fill.png';

const Posts = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPostImage, setSelectedPostImage] = useState('');
  const [comments, setComments] = useState([]);
  
  const handleCommentClick = (image) => {
    setSelectedPostImage(image);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const addComment = (text) => {
    const newComment = { profilePic: S1, name: 'You', text }; // Replace with the actual user's profile pic and name
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className='main'>
      <Stories />
      <div className='middle-container'>
        <Topsellingitems />
        <div className='Posts'>
          {/** Example Post */}
         
          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S3} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S1} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S1)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S2} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S3} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S3)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S6} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S5} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S5)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S3} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S1} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S1)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={St1} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S7} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S7)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S3} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S1} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S1)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S5} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S6} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S6)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S3} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S2} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S2)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>

          <div className='post'>
            <div className='post-top'>
              <div className='user'>
                <img className='profile-picture' src={S3} alt='prof' />
                <div className='info'>
                  <div className='names'>
                    <h3>Sarah Jennifer</h3>
                    <small>@sarah_Jenny * 3 hours</small>
                  </div>
                  <div className="time" text-gray>
                    <small><img src={More} alt='' /></small>
                  </div>
                </div>
              </div>  
            </div>
            <div className="post-img">
              <p>Hello world, I'm Chris Scott from USA and I am so happy to be a user of Mira. Thanks to the developers.</p>
              <img className='fed-img' src={S1} alt="Fed img" />
            </div>
            <div className="action-button">
              <div className="interaction-button">
                <span><img src={Like} alt='heart' /></span><p>1.8k</p>
                <span onClick={() => handleCommentClick(S1)}><img src={Messages} alt='message' /></span><p>1.8k</p>
              </div>
              <div className="share-p">
                <img src={Share} alt='share' /><p>Share</p>
              </div>
            </div>
          </div>
          {/** Add more posts similarly */}
        </div>
      </div>

      <CommentPopup
        isOpen={popupOpen}
        onClose={handleClosePopup}
        postImage={selectedPostImage}
        comments={comments}
        addComment={addComment}
      />
    </div>
  );
};

export default Posts;