import React, { useState ,useEffect } from 'react'
import Toast from './Toast';

const Second = () => {
  const [time, setTime] = useState(7000);
  const [toasts, setToasts] = useState([]);
  const [msg, setMsg] = useState("");
  const maxToasts = 3;

  const addToast = (msg, time) => {
    setMsg(msg,time);
    setToasts([msg ,toasts]);
  };

  useEffect(() => {
    if (toasts.length > maxToasts) {
      const [first, ...rest] = toasts;
      setToasts(rest);
    }
  }, [toasts, maxToasts]);
  return (
	<section >
    
      <label >Enter Custom Toast Text</label>
      <input 
      type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}/>
      <button onClick={() => addToast(msg)}>Show Custom Toast Message</button>
    
      <Toast toastlist={toasts} msg={msg} />
   
    <div>
     
    </div>
  </section>
  )
}

export default Second