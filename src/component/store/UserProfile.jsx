import React, { useState, useEffect } from 'react';

function UserProfile(accessToken) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Errore nel recupero dei dati utente:', error);
        // Gestione degli errori
      }
    };

    fetchUserData(); // Esegui il fetch dei dati
  }, [accessToken]); // Dipendenza da accessToken

  return (
    <div>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          {/* ... altri dati utente ... */}
        </div>
      ) : (
        <p>Caricamento dati utente...</p>
      )}
    </div>
  );
}
export default UserProfile;