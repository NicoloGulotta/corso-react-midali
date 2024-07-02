import './CardForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCity } from './store/citiesSlice'

export default function CardForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imgUrl: '',
        isVisited: false,
    });
    // Gestisce i cambiamenti nei campi del modulo.
    // Per i checkbox, utilizza una funzione di aggiornamento dello stato per garantire 
    // che React rilevi correttamente le modifiche ai valori booleani.
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    console.log(formData.isVisited)
    const handleSubmit = (e) => {
        e.preventDefault();
        const city = {
            id: Date.now(),
            name: formData.name,
            description: formData.description,
            imgUrl: formData.imgUrl,
            isVisited: formData.isVisited,
        };
        setFormData({
            name: '',
            description: '',
            imgUrl: '',
            isVisited: false,
        });
        dispatch(addCity(city))
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="container-form">
                <h1>Form addCity</h1>
                <div className='form-box'>
                    <label>Nome</label>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange} />
                </div>
                <div className='form-box'>
                    <label>Descrizione</label>
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange} />
                </div>
                <div className='form-box'>
                    <label>Immagine</label>
                    <input
                        type="text"
                        name='imgUrl'
                        value={formData.imgUrl}
                        onChange={handleInputChange} />
                </div>
                <div className='form-box'>
                    <label>Visitata?</label>
                    <input className='checkbox'
                        type="checkbox"
                        name='isVisited'
                        checked={formData.isVisited}
                        onChange={handleInputChange} />
                    <button type="submit" >Add City</button>
                </div>

            </form>

        </>
    )
}


