import { useEffect, useState } from "react";
import axios from "axios";

const Third = () => {
  const [seconds, setSeconds] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(5);

  useEffect(() => {
    if (remainingSeconds === null) return;
    if (remainingSeconds === 0) {
      fetchApi();
    }
  }, [remainingSeconds]);

  useEffect(() => {
    return () => clearInterval(countdown);
  }, []);

  const handleButtonClick = () => {
    if (!seconds || isNaN(parseInt(seconds)) || parseInt(seconds) > 10) {
      alert("Please enter a valid number of seconds (up to 10).");
      return;
    }
    setSeconds("");

    const maxSeconds = Math.min(parseInt(seconds), 10);
    setRemainingSeconds(maxSeconds);
    startCountdown(maxSeconds);
  };

  let countdown;
  const startCountdown = (maxSeconds) => {
    countdown = setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

   const fetchApi = async () => {
    try {
      const response = await axios.get("https://api.knowmee.co/api/v1/master/get-country-list");
      if (response.status !== 200) {
        throw new Error("Failed to fetch countries");
      }
      const data = response.data;
      const api= data.responseData;
       console.log('API Response:',api );
      setCountries(api);
      // setCountries(data);
      console.log(countries)
      
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const indexOfLastCountries = currentPage * countriesPerPage;
  const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountries, indexOfLastCountries);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

   function prevpage(){
      if(currentPage !== indexOfFirstCountries){
        setCurrentPage(currentPage-1);
      }
  }
  function nextpage(){
      if(currentPage !== indexOfFirstCountries){
        setCurrentPage(currentPage+1);
      }
  }
  return (
    <section>
      <div className="compo">
      <p>Enter Countdown Time</p>
      <input
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        type="number"
        placeholder="Enter here"
      />
      <button onClick={handleButtonClick} className="btn">
        Start Timer
      </button>

      {remainingSeconds !== null && remainingSeconds > 0 && (
        <p className="timeremain">{remainingSeconds}</p>
      )}
      <div className="grid-container">
        {currentCountries.map((country) => (
          <div key={country.country_id} className="card">
            <p>{country.country_name}</p>
          </div>
        ))}
       
      </div>
       <button onClick={prevpage}>Prev</button>
        <button onClick={nextpage}>Next</button>
      
      </div>
    </section>
  );
};


export default Third;
