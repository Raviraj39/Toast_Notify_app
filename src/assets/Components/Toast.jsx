import { useCallback ,useEffect,useState } from 'react';

const Toast = ({ toastlist, setList, time, isCountDown,msg }) => {
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
			axios.get('https://api.knowmee.co/api/v1/master/get-country-list"')
      .then(response => {
        console.log(response.data);
      }, error => {
        console.log(error);
      });
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
  }, [toastlist, deleteToast,setList]);


  return (
    <div >
      {
        toastlist.map((toast, i) => (
          <div
            key={i}
          >
            <button onClick={() => deleteToast(toast)}>X</button>
            <div>
			  {((isCountDown) && ({toast}!=0)) ? <p>testing:{toast} </p>: <p>{msg}:{count} </p>}
            </div>
             <div>
              <p> </p>
              </div>
          </div>
          
        ))
       
      }
      
    </div>
  )
}

export default Toast