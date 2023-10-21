import React from 'react';
import './contact.css';
import blob from '../../assets/blobs/Vector.svg';

const Contact = () => {
  return (
    <div className='Contact container'>
        <div className="footer">@copyright HarishTornado</div>
        <div className="blob">
            <img src={blob} alt="blob" />
        </div>
        <div className="contact_links">
        <div className="links">
                <div className="icon"></div>
                <h1>facebook</h1>
            </div><div className="links">
                <div className="icon"></div>
                <h1>facebook</h1>
            </div><div className="links">
                <div className="icon"></div>
                <h1>facebook</h1>
            </div>
            <div className="links">
                <div className="icon"></div>
                <h1>facebook</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact