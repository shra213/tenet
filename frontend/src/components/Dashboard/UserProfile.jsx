import { useState, useEffect } from 'react';
import './Styles/UserProfile.css';

const getLeagueClass = (league) => {
  const leagues = {
    Bronze: "user-league-bronze",
    Silver: "user-league-silver",
    Gold: "user-league-gold",
    Platinum: "user-league-platinum",
    Diamond: "user-league-diamond"
  };
  return leagues[league] || "user-league-default";
};

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/users/profile', {
          method: 'GET',
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        console.log('User data fetched:', data);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Could not load user profile.');
      }
    };

    fetchUser();
  }, []);

  if (error) return <p className="error-message">{error}</p>;
  if (!user) return <p>Loading user profile...</p>;

  const leagueName = user.currentLeague?.split('_')[0]; // Extract main league name

  return (
    <div className="user-profile">
      <img src={user.avatar || 'https://th.bing.com/th/id/OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3?rs=1&pid=ImgDetMain'} alt="User Avatar" className="avatar" />
      <div className="user-details">
        <h2 className="user-fullname">{`${user.firstname || ''} ${user.lastname || ''}`}</h2>
        <p className={`user-username ${getLeagueClass(leagueName)}`}>@{user.username}</p>
        <p className="rank">Rank: {user.rank}</p>
        <p className="email">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
