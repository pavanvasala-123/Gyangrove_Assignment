import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "../RecomendedShows/RecomendedShows.css";

const RecomendedShows = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setData(data.events); // Assuming data is an object with 'events' property containing the array of events
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recomended_shows_con">
      <div className="recomended_shows">
        <p>Recommended Shows</p>
        <FaArrowRightLong />
      </div>
      <div className="card-container">
        {Data.length > 0 ? (
          Data.map((event) => (
            <div
              className="card"
              key={event.eventName}
              style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')`,
                height: "350px",
                width: "320px",
              }}
            >
              <div className="card_details">
              <div className="event_name_location">
                <h5>{event.eventName}</h5>
                <p>{event.cityName}</p>
              </div>
              <div className="event_date_weather">
                <p>{new Date(event.date).toLocaleDateString()}</p>
                <p>{event.weather}</p>
              </div>
             </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RecomendedShows;
