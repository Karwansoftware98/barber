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

          <div className="modalBackground">
           
          <div className="modalContainer">
            <div className="titleCloseBtn">
            <button className="close" onClick={close}>
                &times;
             </button>
            </div>
            <div className="title">
              <h1>Take Appointment </h1>
            </div>
            <div className="body"> 
            {/* <span>pick a date </span> */}
             <input  type="date" />

            {/* <span>pick a time</span> */}
             <input  type="time" />

            {/* <span>your phone number </span> */}
             <input  type="phone"  placeholder='phone number'/>

            </div>
            <div className="footer">
            <button
            id="cancelBtn"
            className="close" onClick={close}>
              Cancel
             </button>
              <button>Submit</button>
            </div>
          </div>
        </div>
     
       
    )}
  </Popup>
);