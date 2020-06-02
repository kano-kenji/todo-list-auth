import React from 'react';

function Footer(){

    const copyright = 'Copyright © ' + (new Date()).getFullYear() + ' Alexander Tarasevich.';

    return (
        <div className="footer">
            <p className="copyright">
                {copyright}
                <a href="https://github.com/kano-kenji/todo-list-auth">Git hub</a>
            </p>
        </div>
    );
};

export default Footer;