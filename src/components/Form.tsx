import { FormEvent, useState } from 'react';

interface FormProps {
    getWeather: (city: string) => void;
}
function Form({ getWeather }: FormProps) {
    const [city, setCity] = useState('');

    const getCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeather(city)
        setCity('')
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={e => setCity(e.target.value)} type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form