import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Card from '../Card';
import CardForm from '../CardForm';
// import Exemple from '../Exemple';

function App() {
  // Stati per la gestione dei dati
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]); // Dati recuperati dall'API (inizialmente vuoto)
  const [count, setCount] = useState(0); // Contatore per attivare il fetch dei dati
  const [items, setItems] = useState([1, 2, 3]); // Esempio di stato per aggiungere elementi
  const [cities, setCities] = useState([
    {
      id: 0,
      isVisisted: true,
      name: "Tokio",
      description: "La capitale di Japon",
      imgUrl: "https://media.istockphoto.com/id/1475082116/it/foto/tokyo-skytree-che-si-affaccia-sui-tetti-del-paesaggio-urbano-delle-case-in-giappone.webp?b=1&s=170667a&w=0&k=20&c=SQeW9UmpRNAnex9WQIlyZGPEQgSQqS9ah5_PFPuc7qQ="
    },
    {
      id: 1,
      isVisisted: false,
      name: "New York",
      description: "La capitale del mondo",
      imgUrl: "https://media.istockphoto.com/id/599766748/it/foto/la-citt%C3%A0-dei-sogni-lo-skyline-di-new-york-al-crepuscolo.webp?b=1&s=170667a&w=0&k=20&c=5tOZt4yuyqrB-8w1hVwvq9NAQuFzyztKY3_b2F-oNkw="
    },
    {
      id: 2,
      isVisisted: true,
      name: "Paris",
      description: "La capitale della Francia",
      imgUrl: "https://media.istockphoto.com/id/1952253409/it/foto/skyline-paris.webp?b=1&s=170667a&w=0&k=20&c=J2JGEHGE9LlmWy4WuxRY67gTRnGpHcZZ4rPVhov0DAo="
    },
    {
      id: 3,
      isVisisted: false,
      name: "Roma",
      description: "La capitale dell'Italia",
      imgUrl: "https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.webp?b=1&s=170667a&w=0&k=20&c=tZ5eB_gCgm5WoSyQ-Soo7aqIOvgTi_RFIMeTOpV8fcI="
    },
  ]);

  // Stato e reducer per la gestione del form
  const [formState, dispatchFormState] = useReducer(formReducer, { name: '', email: '' });

  // Reducer per il form: gestisce le azioni di modifica e reset del form
  function formReducer(state, action) {
    switch (action.type) {
      case 'CHANGE_FIELD': // Cambia il valore di un campo del form
        return { ...state, [action.field]: action.value };
      case 'RESET_FORM': // Resetta il form ai valori iniziali
        return { name: '', email: '' };
      default:
        return state;
    }
  }

  // Funzione per gestire la modifica dei campi del form
  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: 'CHANGE_FIELD', field, value });
  };

  // Funzione per l'invio del form
  const sendForm = (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form (ricaricamento pagina)
    console.log(formState); // Stampa i dati del form nella console
  };

  // Funzione per il reset del form
  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({ type: 'RESET_FORM' }); // Invia l'azione di reset al reducer
  };

  // Funzione per aggiungere un elemento all'array "items"
  const additems = () => {
    setItems([...items, items.length + 1]); // Crea una nuova copia dell'array con un nuovo elemento
  };

  // useEffect per il fetch dei dati dall'API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Effettua una richiesta GET all'API
      .then(response => response.json()) // Converte la risposta in formato JSON
      .then(data => {
        setData(data); // Aggiorna lo stato "data" con i dati ricevuti
      });
  }, [count]); // Il fetch viene eseguito al montaggio del componente e quando "count" cambia

  // Funzioni per gestire eventi di click, cambiamento input e invio form
  function handleClick() {
    alert('ciao');
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  // Funzione per aggiungere una nuova città all'array "cities"
  const addCity = (city) => {
    setCities([...cities, city]); // Crea una nuova copia dell'array con la nuova città
  };


  return (
    <>
      <CardForm addCity={addCity}></CardForm>
      <h1>Render.map</h1>
      <div className='container-1'>
        {cities.map(city => <Card
          key={city.id}
          isVisisted={city.isVisisted}
          title={city.name}
          description={city.description}
          imgUrl={city.imgUrl} />)}
      </div>

      <h1>Render.map + .filter</h1>
      <div className='container-2'>
        {cities
          .filter((city) => !city.isVisisted)
          .map(city =>
            <Card
              key={city.id}
              isVisisted={city.isVisisted}
              title={city.name}
              description={city.description}
              imgUrl={city.imgUrl} />)}
      </div>

      <h1>Render.map dati da codice</h1>
      <div className='container-3'>
        <Card
          isVisisted={true}
          title="Tokio"
          description="La capitale di Japon"
          imgUrl="https://media.istockphoto.com/id/1475082116/it/foto/tokyo-skytree-che-si-affaccia-sui-tetti-del-paesaggio-urbano-delle-case-in-giappone.webp?b=1&s=170667a&w=0&k=20&c=SQeW9UmpRNAnex9WQIlyZGPEQgSQqS9ah5_PFPuc7qQ=" />
        <Card
          isVisisted={false}
          title="New York"
          description="La capitale del mondo"
          imgUrl="https://media.istockphoto.com/id/599766748/it/foto/la-citt%C3%A0-dei-sogni-lo-skyline-di-new-york-al-crepuscolo.webp?b=1&s=170667a&w=0&k=20&c=5tOZt4yuyqrB-8w1hVwvq9NAQuFzyztKY3_b2F-oNkw=" />

        <Card
          isVisisted={true}
          title="Paris"
          description="La capitale dell'Europa"
          imgUrl="https://media.istockphoto.com/id/1952253409/it/foto/skyline-paris.webp?b=1&s=170667a&w=0&k=20&c=J2JGEHGE9LlmWy4WuxRY67gTRnGpHcZZ4rPVhov0DAo=" />
        <Card
          isVisisted={false}
          title="Rome"
          description="La capitale dell'Italia"
          imgUrl="https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.webp?b=1&s=170667a&w=0&k=20&c=tZ5eB_gCgm5WoSyQ-Soo7aqIOvgTi_RFIMeTOpV8fcI=" />

      </div>

      {/* <h1>Render.map + Api</h1>
      <div className="container-3">
        {data.map(item => (
          <div
            key={item.id}
            style={{
              backgroundColor: 'rgb(24, 24, 24)',
              width: '350px',
              height: '600px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              margin: '20px',
            }}
          >.
            <h1>{item.title}</h1>
            <span>{item.id}</span>
            <p>{item.body}</p>
          </div>
        ))}
      </div> */}

      <h1>Render input/form</h1>
      <div className='container-4'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>
          alert
        </button>
        <input type="text" placeholder='test-input-text' onChange={handleChange} />
        <form onSubmit={handleSubmit}>
          <button type="submit">submit</button>
        </form>
        <button onClick={additems}>
          Add
        </button>
      </div>

      <h1>Render form</h1>
      <div className='container-5'>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              name="name"
              value={formState.name}
              onChange={(e) => handleFieldChange("name", e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id='email'
              name="email"
              value={formState.email}
              onChange={(e) => handleFieldChange("email", e.target.value)} />
          </div >
          <button type="submit" onClick={resetForm}>Reset</button>
          <button type="submit" onClick={sendForm}>Invia</button>
        </form >
      </div>

    </>
  )
}

export default App
