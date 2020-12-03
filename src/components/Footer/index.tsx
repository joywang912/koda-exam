import React from 'react';
import './footer.scss';

const Footer = () => {
    return <footer>
        <hr />
        <div className="row no-gutters  text-muted">
            <div className="col-12 col-sm-4 col-lg-3">© Kodaweb. All Rights Reserved.</div>
            <div className="col-12 col-sm-5 col-lg-6">
                <a href="#" className="footer-link">Terms & Conditions</a>
                <a href="#" className="footer-link">Privacy</a>
            </div>
            <div className="col-12 col-sm-3 text-right">Site by Kodaweb</div>
        </div>
    </footer>;
};

export default Footer;