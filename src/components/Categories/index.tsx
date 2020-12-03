import React from 'react';
import './categories.scss';

const categories = [
    {
        displayName: 'Lorem ipsum',
        bannerClassName: 'banner-grey'
    },
    {
        displayName: 'Lorem ipsum',
        bannerClassName: 'banner-red'
    },
    {
        displayName: 'Lorem ipsum',
        bannerClassName: 'banner-yellow-green'
    },
    {
        displayName: 'Lorem ipsum',
        bannerClassName: 'banner-blue'
    },
    {
        displayName: 'Lorem ipsum',
        bannerClassName: 'banner-dark-green'
    },
    {
        displayName: 'Lorem ipsum',
        bannerClassName: 'banner-yellow'
    }
];
const Categories = () => {
    return <div className="categories">
        {categories.map((categories, idx) => {
            return <div className={`categories__item font-slab ${categories.bannerClassName}`}>
                <div className="categories__item-text">
                    {categories.displayName}
                </div>
            </div>;
        })
        }
    </div>;
};

export default Categories; 