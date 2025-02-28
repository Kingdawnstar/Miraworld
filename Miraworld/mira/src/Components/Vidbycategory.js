import React from 'react'
import './Vidbycategory.css';
import Play from '../assetsmira/play.png'
import Heart from '../assetsmira/Group 2172.png'
import Share from '../assetsmira/Group 2174.png'
import Tb from '../assetsmira/thumbnail6.png'
import Scroll from '../assetsmira/Group 2175.png'
import S1 from '../assetsmira/s3.jpg'
import More from '../assetsmira/ri_more-fill.png'

const Vidbycategory = () => {
  return (
    <div className='vidbycat'>
        <h5>Explore by categories</h5>
        <div className='cat-wrap'>
            <div className='cat-links'>
                <div className='cat-link active'><p>FOLLOWING</p></div>
                <div className='cat-link'><p>RECENTLY ADDED</p></div>
                <div className='cat-link'><p>FOR YOU</p></div>
                <div className='cat-link'><p>REELS</p></div>
                <div className='cat-link'><p>SAVED VIDEOS</p></div>
            </div>
            <div className='cats'>
                <div className='cat'>
                    <div className='thumb-nail'>
                        <img className='thumb-wrap' src={Tb} alt='' />
                    </div>
                    <div className='top-img'>
                        <img className='heart' src={Heart} alt='' />
                        <img className='share' src={Share} alt=''/>
                    </div>
                    <p className='time'>12:53</p>
                    <div className='cat-bottom'>
                        <div className='prof-img'>
                            <img className='prof' src={S1} alt='' />
                        </div>
                        <div className='cat-info'>
                            <h5>Taking Quality Photos</h5>
                            <p>Jonathan James</p>
                        </div>
                        <img className='more' src={More} alt='' />
                    </div>
                    <div className='play'>
                        <small>Watch</small>
                    <img className='play-btn' src={Play} alt='' />
                    </div>
                    
                </div>
                <div className='cat'>
                    <div className='thumb-nail'>
                        <img className='thumb-wrap' src={Tb} alt='' />
                    </div>
                    <div className='top-img'>
                        <img className='heart' src={Heart} alt='' />
                        <img className='share' src={Share} alt=''/>
                    </div>
                    <p className='time'>12:53</p>
                    <div className='cat-bottom'>
                        <div className='prof-img'>
                            <img className='prof' src={S1} alt='' />
                        </div>
                        <div className='cat-info'>
                            <h5>Taking Quality Photos</h5>
                            <p>Jonathan James</p>
                        </div>
                        <img className='more' src={More} alt='' />
                    </div>
                    <div className='play'>
                        <small>Watch</small>
                    <img className='play-btn' src={Play} alt='' />
                    </div>
                    
                </div>
                <div className='cat'>
                    <div className='thumb-nail'>
                        <img className='thumb-wrap' src={Tb} alt='' />
                    </div>
                    <div className='top-img'>
                        <img className='heart' src={Heart} alt='' />
                        <img className='share' src={Share} alt=''/>
                    </div>
                    <p className='time'>12:53</p>
                    <div className='cat-bottom'>
                        <div className='prof-img'>
                            <img className='prof' src={S1} alt='' />
                        </div>
                        <div className='cat-info'>
                            <h5>Taking Quality Photos</h5>
                            <p>Jonathan James</p>
                        </div>
                        <img className='more' src={More} alt='' />
                    </div>
                    <div className='play'>
                        <small>Watch</small>
                    <img className='play-btn' src={Play} alt='' />
                    </div>
                    
                </div>
                <div className='cat'>
                    <div className='thumb-nail'>
                        <img className='thumb-wrap' src={Tb} alt='' />
                    </div>
                    <div className='top-img'>
                        <img className='heart' src={Heart} alt='' />
                        <img className='share' src={Share} alt=''/>
                    </div>
                    <p className='time'>12:53</p>
                    <div className='cat-bottom'>
                        <div className='prof-img'>
                            <img className='prof' src={S1} alt='' />
                        </div>
                        <div className='cat-info'>
                            <h5>Taking Quality Photos</h5>
                            <p>Jonathan James</p>
                        </div>
                        <img className='more' src={More} alt='' />
                    </div>
                    <div className='play'>
                        <small>Watch</small>
                    <img className='play-btn' src={Play} alt='' />
                    </div>
                    
                </div>
                <div className='cat'>
                    <div className='thumb-nail'>
                        <img className='thumb-wrap' src={Tb} alt='' />
                    </div>
                    <div className='top-img'>
                        <img className='heart' src={Heart} alt='' />
                        <img className='share' src={Share} alt=''/>
                    </div>
                    <p className='time'>12:53</p>
                    <div className='cat-bottom'>
                        <div className='prof-img'>
                            <img className='prof' src={S1} alt='' />
                        </div>
                        <div className='cat-info'>
                            <h5>Taking Quality Photos</h5>
                            <p>Jonathan James</p>
                        </div>
                        <img className='more' src={More} alt='' />
                    </div>
                    <div className='play'>
                        <small>Watch</small>
                    <img className='play-btn' src={Play} alt='' />
                    </div>
                    
                </div>
            </div>
            <img className='next' src={Scroll} alt='' />
        </div>
    </div>
  )
}

export default Vidbycategory