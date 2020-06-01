import React from 'react';

function Footer(){

    const copyright = 'Copyright © ' + (new Date()).getFullYear() + ' Alexander Tarasevich';

    return (
        <div className="footer">
            <p className="copyright">{copyright}</p>
        </div>
    );
};

export default Footer;