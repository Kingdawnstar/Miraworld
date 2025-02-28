import React from 'react'
import './Video.css'
import Vid from '../assetsmira/video.mp4'
import Heart from '../assetsmira/Group 2172.png'
import Share from '../assetsmira/Group 2174.png'
import Likers from '../assetsmira/lucide_users.png'
import Tb from '../assetsmira/thumbnail5.png'
import S1 from '../assetsmira/s2.jpg'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className='Video'>
        <div className='video-wrap'>
            <Link to={'/Miraworld/Featuredvideos'}><p className='b'>Back</p></Link>
            <h5>Brandbuzz: Unveiling Our Latest Collection</h5>
            <div className='full-wrap'>
            <div className='vid-cont'>
                <video className='playing-vid' src={Vid} controls autoPlay muted/>
                <div className='vid-info'>
                <div className='vid-info-left'>
                <img className='prof' src={Tb} alt=''/>
                <h6>Jennifer Adams</h6>
                <small>24k likes</small>
                <img className='likers' src={Likers} alt='' />
                </div>
                <div className='vid-info-right'>
                    <img className='share' src={Share} alt='' />
                    <img className='heart' src={Heart} alt='' />
                    <p><span>+</span>Follow</p>
                </div>
                
            </div>
            <div className='about-sec'>
                    <h5>About</h5>
                    <div className='comment-sec'>
                        <h5>Comments</h5>
                        <div className='comments'>
                            <div className='comment'>
                                <div className='prof-img'>
                                    <img className='profile' src={S1} alt='' />
                                </div>
                                <div className='comment-write'>
                                    <h6>John Snow</h6>
                                    <p>Welcome to mira. The next multi billion dollar startup
                                        that is gonna shake the world. Tech giants are gonna be really concerned.
                                    </p>
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='prof-img'>
                                    <img className='profile' src={S1} alt='' />
                                </div>
                                <div className='comment-write'>
                                    <h6>John Snow</h6>
                                    <p>Welcome to mira. The next multi billion dollar startup
                                        that is gonna shake the world. Tech giants are gonna be really concerned.
                                    </p>
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='prof-img'>
                                    <img className='profile' src={S1} alt='' />
                                </div>
                                <div className='comment-write'>
                                    <h6>John Snow</h6>
                                    <p>Welcome to mira. The next multi billion dollar startup
                                        that is gonna shake the world. Tech giants are gonna be really concerned.
                                    </p>
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='prof-img'>
                                    <img className='profile' src={S1} alt='' />
                                </div>
                                <div className='comment-write'>
                                    <h6>John Snow</h6>
                                    <p>Welcome to mira. The next multi billion dollar startup
                                        that is gonna shake the world. Tech giants are gonna be really concerned.
                                    </p>
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='prof-img'>
                                    <img className='profile' src={S1} alt='' />
                                </div>
                                <div className='comment-write'>
                                    <h6>John Snow</h6>
                                    <p>Welcome to mira. The next multi billion dollar startup
                                        that is gonna shake the world. Tech giants are gonna be really concerned.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
            </div>
    </div>
  )
}

export default Video