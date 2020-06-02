import React from 'react';

function Footer(){
    return (
        <div className="footer">
            <p className="copyright">
                Copyright © {new Date().getFullYear()} &nbsp;
                <a href="https://github.com/kano-kenji/todo-list-auth">Alexander Tarasevich</a>
            </p>
        </div>
    );
};

export default Footer;