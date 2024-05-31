import React ,{useState,useEffect} from 'react'

import Toast from './Toast';

const Third = () => {
  const [toasts, setToasts] = useState([]);
  const [seconds, setSeconds] = useState('');

  const addSecond = (seconds, duration = 7000) => {
    setSeconds(seconds,duration);
    setToasts([seconds ,toasts]);
  };

  
  return (
	<section>
    <label>Enter Countdown Time</label>
     <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}/>
      <button onClick={() => addSecond(seconds)}>Start Timer</button>
      <Toast time={seconds} toastlist={toasts}/>
  </section>
  )
}

export default Third