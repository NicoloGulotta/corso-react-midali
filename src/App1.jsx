import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

import './App1.css';
import Card from './component/Card';
import CardForm from './component/CardForm';
import CounterComponent from './CounterComponent';
import { addCity } from './component/store/citiesSlice';

// --- Separate Google Login Component ---
function GoogleLoginButton() {
  const [userInfo, setUserInfo] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {

      console.log(credentialResponse, credentialResponse.access_token);
      try {
        const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: { Authorization: `Bearer ${credentialResponse.access_token}` },
        });
        const data = await response.json();
        setUserInfo(data);
        console.log(data);

        localStorage.setItem('accessToken', credentialResponse.access_token);
        localStorage.setItem('userInfo', JSON.stringify(data));

      } catch (error) {
        console.error('Errore nel recupero dei dati utente:', error);
      }
    },
    onError: () => console.log('Login fallito'),
  });

  return (
    <button onClick={() => login()}>
      {userInfo ? `Benvenuto, ${userInfo.name}!` : 'Accedi con Google'}
    </button>
  );
}

// --- Main App Component ---
function App() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities.value);

  const handleNewCity = newCity => {
    dispatch(addCity(newCity));
  };

  return (
    <GoogleOAuthProvider clientId="01001229423013-015nt1ivd2jb0i7erg8arkbcka361nuh.apps.googleusercontent.com">
      <div className="app-container">
        <GoogleLoginButton />

        <div className="content-area">
          <CardForm onAddCity={handleNewCity} />
          <CounterComponent />

          <h2>Le tue città:</h2>
          <div className="card-grid">
            {cities.map(city => (
              <Card key={city.id} {...city} />
            ))}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
