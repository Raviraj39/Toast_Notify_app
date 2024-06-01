import { useEffect, useState } from "react";

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
      const response = await fetch("https://api.knowmee.co/api/v1/master/get-country-list");
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      console.log(data);
      setCountries(data.response_data || data);  
    
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const indexOfLastCountries = currentPage * countriesPerPage;
  const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountries, indexOfLastCountries);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="comp3">
      <input
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        type="number"
        className="input"
        max={10}
        min={0}
      />
      <button onClick={handleButtonClick} className="btn">
        Click
      </button>

      {remainingSeconds !== null && remainingSeconds > 0 && (
        <p className="timeremain">{remainingSeconds}</p>
      )}
      <div className="grid-container">
        {currentCountries.map((country) => (
          <div key={country.country_id} className="card">
            <h3>{country.country_name}</h3>
          </div>
        ))}
      </div>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Third;
