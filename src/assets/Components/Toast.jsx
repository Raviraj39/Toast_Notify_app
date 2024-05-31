import { useCallback ,useEffect,useState } from 'react';

const Toast = ({ toastlist, setList, time, isCountDown,msg}) => {
	const [count, setCount] = useState(time/1000);
  const deleteToast = useCallback(id => {
    const toastListItem = toastlist.filter(e => e !== id);
    setList(toastListItem);
  }, [toastlist, setList]);

  useEffect(() => {
    const interval = setInterval(() => {
		const n = toastlist.length;
      if(n) {
		if(isCountDown){
			console.log("hey hi");
			//api-call here
		}
        deleteToast(toastlist[n-1]);
      }
	  if(isCountDown){
		setCount(count-1);
	  }
    }, time);

    return () => {
      clearInterval(interval);
    }
  }, [toastlist, deleteToast]);



  return (
    <div >
      {
        toastlist.map((toast, i) => (
          <div
            key={i}
          >
            <button onClick={() => deleteToast(toast)}>X</button>
            <div>
              {/* <p>{msg} hey dekun {toast} {count}</p> */}
			  {((isCountDown) && ({toast}!=0)) ? <p>{toast} : 1</p>: <p>{msg} hey dekun {toast} {count}</p>
			  }
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default Toast