import React, { useState } from 'react';
import './Topsellingitems.css';
import S1 from '../assetsmira/s1.jpg';
import S2 from '../assetsmira/s2.jpg';
import S3 from '../assetsmira/s3.jpg';
import St1 from '../assetsmira/st1.jpg';
import S6 from '../assetsmira/s6.jpg';
import S5 from '../assetsmira/s5.jpg';
import S7 from '../assetsmira/s7.jpg';

const Reel = () => {
  const [activeTab, setActiveTab] = useState('topSelling');

  const topSellingItems = [
    { src: S2, alt: 'img1', name: 'Elegant footwear'},
    { src: S3, alt: 'Img 2', name: 'Elegant footwear' },
    { src: S5, alt: 'img3', name: 'Elegant footwear', className: 'long' },
    { src: S6, alt: 'img4', name: 'Elegant footwear' },
    { src: S1, alt: 'img5', name: 'Elegant footwear' },
    { src: S7, alt: 'img6', name: 'Elegant footwear', className: 'long' },
    { src: S2, alt: 'img1', name: 'Elegant footwear'},
    { src: S3, alt: 'Img 2', name: 'Elegant footwear' },
    { src: S5, alt: 'img3', name: 'Elegant footwear', className: 'long' },
    { src: S6, alt: 'img4', name: 'Elegant footwear' },
    { src: S1, alt: 'img5', name: 'Elegant footwear' },
    { src: S7, alt: 'img6', name: 'Elegant footwear', className: 'long' },
    { src: S2, alt: 'img1', name: 'Elegant footwear' },
    { src: S3, alt: 'Img 2', name: 'Elegant footwear' },
    { src: S5, alt: 'img3', name: 'Elegant footwear', className: 'long' },
    { src: S6, alt: 'img4', name: 'Elegant footwear' },
    { src: S1, alt: 'img5', name: 'Elegant footwear' },
    { src: S7, alt: 'img6', name: 'Elegant footwear', className: 'long' },
    { src: S2, alt: 'img1', name: 'Elegant footwear' },
    { src: S3, alt: 'Img 2', name: 'Elegant footwear' },
    { src: S5, alt: 'img3', name: 'Elegant footwear', className: 'long' },
    { src: S6, alt: 'img4', name: 'Elegant footwear' },
    { src: S1, alt: 'img5', name: 'Elegant footwear' },
    { src: S7, alt: 'img6', name: 'Elegant footwear', className: 'long' },
    // Add more items as needed
  ];

  const topStores = [
    { src: St1, alt: 'Store 1', name: 'Elegant footwear', className: 'long'  },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear'  },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' , className: 'long'},
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear', className: 'long'  },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear' },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' , className: 'long' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear' },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' , className: 'long' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear' },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear', className: 'long' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear' },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },
    { src: St1, alt: 'Store 1', name: 'Elegant footwear', className: 'long' },
    { src: S1, alt: 'Store 2', name: 'Elegant footwear' },
    { src: S2, alt: 'Store 3', name: 'Elegant footwear' },

    // Add more items as needed
  ];

  const displayedItems = activeTab === 'topSelling' ? topSellingItems : topStores;

  return (
    <div className='Reels'>
      <div className='heads'>
        <div className={`title ${activeTab === 'topSelling' ? 'active-title' : ''}`} onClick={() => setActiveTab('topSelling')}>
          <h1>Top Selling Items</h1>
        </div>
        <div className={`title2 ${activeTab === 'topStores' ? 'active-title' : ''}`} onClick={() => setActiveTab('topStores')}>
          <h1>Top Stores</h1>
        </div>
      </div>
      
      <div className='Reel-wrap'>
        {displayedItems.map((item, index) => (
          <div key={index} className={`Reel ${item.className || 'short'}`}>
            <img src={item.src} alt={item.alt} />
            {activeTab === 'topStores' && (
              <div className='numbering'>{index + 1}</div>
            )}
            <button className='image-button'>{item.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reel;