export interface WeatherInfo {
    city: string;
    country: string;
    temp: number;
    pressure: number;
    sunset: number;
}

export interface WeatherProps {
    weather: WeatherInfo;
    message: string;
}

export interface ApiResponse {
    name: string;
    sys: {
        country: string;
        sunset: number;
    };
    main: {
        temp: number;
        pressure: number;
    };
}