import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect,useState } from 'react';


const RecomendedShows = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data.events); // Assuming data is an object with 'events' property containing the array of events
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
                <FaArrowRightLong />
                <p>Recommended Shows</p>
            </div>
            <div className="card-container">
                {Data.length > 0 ? (
                    Data.map(event => (
                       
                        <div className="card" key={event.eventName}  style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)`, height:'80px' , width:'100px'
                        }}>
                            <h3>{event.eventName}</h3>
                            <p>{event.cityName}</p>
                            <p>{new Date(event.date).toLocaleDateString()}</p>
                            <p>{event.weather}</p>
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
