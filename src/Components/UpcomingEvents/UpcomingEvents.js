import React ,{useEffect ,useState} from 'react'
import '../UpcomingEvents/UpcomingEvents.css'
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";


const UpcomingEvents = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setData(data.events); // Assuming data is an object with 'events' property containing the array of events
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
  return (
    <div className="upcoming_event_container">
      <div className='upcoming_events'>
      
        <h3>UpcomingEvents</h3>
        <FaArrowRightLong />
      </div>
      <div className='upcoming_event_cards_container'>
        {Data.length > 0 ? (
          Data.map((event) => (
            <div className="upcoming_event_card" key={event.eventName}>
            <img src= 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg' alt={event.eventName}/>
            <p className='event_date'>{new Date(event.date).toLocaleDateString()}</p>
              <div className='event-details'> 
              <div className='event_name_location'>
                <h5>{event.eventName}</h5>
                <div className='event_location'>
                <CiLocationOn />
                <p>{event.cityName}</p>
                </div>
              </div>
              <div className='weather_and_distance'>
                <p>{event.weather} | </p>
                <p>{Math.round(event.distanceKm)}Km</p>
              </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default UpcomingEvents
