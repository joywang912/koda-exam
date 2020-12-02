import React from 'react';
import './bannerContent.scss';

const heading = 'Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr';
const subHeading = 'Stet clita kasd gubergren, no sea takimata sancuts';
const BannerContent = () => {
    return <div className="banner-content ">
        <h1 className="font-slab" dangerouslySetInnerHTML={{ __html: heading }} />
        <h2>{subHeading}</h2>
        <div className="margin-t-30">
            <button className="btn btn-primary">Find out more</button>
        </div>
    </div>;
};

export default BannerContent;