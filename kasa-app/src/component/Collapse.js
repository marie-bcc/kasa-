import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Collapse = ({ title, content, className, targetClass }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`toggle${toggle ? ' open' : ''} ${className}`}>
      <div className="tittleToggle">
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)}>
          <i className={`fa fa-angle-${toggle ? 'up' : 'down'}`}/>
        </button>
      </div>
      <div className="containerInformations">
        {toggle && <p>{Array.isArray(content) ? content.join(', ') : content}</p>}
      </div>
    </div>
  );
};


export default Collapse;
