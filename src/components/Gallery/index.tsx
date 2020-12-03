import React from 'react';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import './gallery.scss';

const photosWithText = [
    {
        src: image1,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy',
        date: '24 May 2019'
    }, {
        src: image2,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy',
        date: '24 May 2019'
    }, {
        src: image3,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy',
        date: '24 May 2019'
    }, {
        src: image4,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy',
        date: '24 May 2019'
    }, {
        src: image5,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy',
        date: '24 May 2019'
    }, {
        src: image6,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy',
        date: '24 May 2019'
    }
];
const Gallery = () => {
    return <div className="gallery row no-gutters">
        {
            photosWithText.map((photoWithText, idx) => {
                return <div key={idx} className="col-6 col-lg-4">
                    <div className="photo-container">
                        <img src={photoWithText.src} alt={photoWithText.text} className="photo-image" />
                        <div className="photo-overlay font-slab">
                            <div className="photo-overlay__date">{photoWithText.date}</div>
                            <div className="photo-overlay__text">{photoWithText.text}</div>
                        </div>
                    </div>
                </div>;
            })
        }

    </div>;
};

export default Gallery;