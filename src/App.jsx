import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let tours = await response.json();
        setTours(tours);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
      
    };
    fetchData();
  }, [tours.length === 0]);

  if (isLoading) {
    return <main>
      <Loading />
    </main>;
  }
  // if (isError) {
  //   return <main>
  //     <h2>Oops there is an Error!</h2>
  //   </main>;
  // }

  // console.log(tours);
  if(tours.length == 0) {
    return(
      <main>
        <div className="main">
          <h2>No tours available</h2>
          <button className="btn" onClick={() => fetchData()}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
};
export default App;
