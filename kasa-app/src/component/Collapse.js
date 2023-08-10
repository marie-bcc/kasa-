import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`toggle${toggle ? ' open' : ''}`}>
      <div className="tittleToggle">
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)}>
          <i className={`fa fa-angle-${toggle ? 'up' : 'down'}`}/>
        </button>
      </div>
      <div className="containerInformations">
        {toggle && (
            Array.isArray(content) ? (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>{content}</p>
            )
        )}
      </div>
    </div>
  );
};



export default Collapse;
