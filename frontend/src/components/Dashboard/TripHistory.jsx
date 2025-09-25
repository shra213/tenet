import React, { useState, useEffect } from 'react';
import './styles/TripHistory.css';

const TripHistory = () => {
  const [tripHistory, setTripHistory] = useState([]);

  useEffect(() => {
    const fetchTripHistory = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/users/trips/mytrips', {
          method: 'GET',
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          setTripHistory(data.trips);
        } else {
          console.error('Failed to fetch trip history');
        }
      } catch (error) {
        console.error('Error fetching trip history:', error);
      }
    };

    fetchTripHistory();
  }, []);

  return (
    <div className="trip-history">
      <h3>Trip History</h3>
      <table className="trip-history-table">
        <thead>
          <tr>
            <th>Starting Point</th>
            <th>Destination</th>
            <th>Distance</th>
            <th>Points Earned</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
  {tripHistory.map((trip, index) => (
    <tr key={trip.id || index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
      <>
        <td>{trip.startLocation}</td>
        <td>{trip.endLocation}</td>
        <td>{trip.kilometers} km</td>
        <td>{trip.tripPoints} pts</td>
        <td>
          {new Date(trip.Date).toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </td>
      </>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default TripHistory;
