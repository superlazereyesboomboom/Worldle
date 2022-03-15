import React from 'react';
import "./Win_Screen.css"

function Popup(props){
  return(props.trigger) ? (
    <div className ="popup">
    <div className ="popup-inner">
    <button className="close-btn">close</button>
    {props.children}
    </div>
    </div>
  ) : "";
}

export default Popup

/*
<Popup trigger ={true}>
  <h3> my popup</h3>
</Popup>
*/
