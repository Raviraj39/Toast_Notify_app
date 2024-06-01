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
      <div className='compo'>
      <p>Enter Custom Toast Text</p>
      <input 
      type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)} placeholder='Enter text'/>
      <button onClick={() => addToast(msg)} className='btn'>Show Custom Toast Message</button>
    
      <Toast toastlist={toasts} msg={msg} isCountDown={true} />
   
      </div>
  </section>
  )
}

export default Second