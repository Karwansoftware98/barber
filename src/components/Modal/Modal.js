import React from 'react';
import Popup from 'reactjs-popup';
import tw from "twin.macro";

import './style.css';

const PhoneNumber = tw.input`flex-1 border rounded-lg border-gray-300 pl-3 w-0`;


export default () => (
  <Popup
    trigger={<button className="button">Book Now</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Take appointment </div>
        <div className="content">
          {' '}

          <br />
           
        </div>
        
      
        <div className='picker'> 
          <input type="date" id="start" 
              name="trip-start"
              min="2018-01-01" max="2023-12-31" />
              <input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/>
       </div>
       
      <input type="phonenumber" placeholder='phone number'/>

      <button className="button">Submit</button>
       

      </div>
    )}
  </Popup>
);