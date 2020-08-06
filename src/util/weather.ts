import { Coordinate, Weather, UVIndex, WeeklyForecast} from '../models';

class WeatherService {
    private baseUrl = 'https://api.openweathermap.org/data/2.5';
    private appId = '0dd2e08fd19801e6177193ba30a52199';

    async current(): Promise<Weather> {
        const res = await this.fetchData('weather');
        const data = await res;
        return this.unpackWeather(data)
        };

    async forecast(): Promise<WeeklyForecast> {
        const res = await this.fetchData('forecast');
        const data = await res;
        return this.unpackForecast(data)
    };

    async uvIndex() : Promise<UVIndex> {
        const res = await this.fetchData('uvi');
        return this.unpackUVIndex(res)
    }

    private async fetchData(endpoint: string): Promise<any> {
        const loc = await this.currentLocation();
        const res = await fetch(`${this.baseUrl}/${endpoint}?lat=${loc.latitude}&lon=${loc.longitude}&appid=${this.appId}`);
        return res.json();
    }

    private async currentLocation(): Promise<Coordinate> {
        return Promise.resolve({
            latitude: 43.073051,
            longitude: -89.40123
        });
    }

    private unpackWeather (data: any): Weather {
        return {
            temperature: data.main.temp,
            condition: data.weather[0].id,
            date: data.dt && new Date(data.dt * 1000)
        };

    }  private unpackForecast(data: any): WeeklyForecast {
        let currentDay: Array<Weather>;
        let prevDate: number;
        const forecast: WeeklyForecast = [];

        data.list.forEach((item: any) => {
            const w = this.unpackWeather(item);
            if (w.date!.getDate() !== prevDate) {
                prevDate = w.date!.getDate();
                currentDay = [];
                forecast.push(currentDay);
            }
            currentDay.push(w);
        });

        return forecast;
    }

    private unpackUVIndex(data:any) : UVIndex {
        return {
            value: data.value,
            riskLevel:this.riskLevel(data.value)
        }
    }

    private riskLevel(value:number) : number {
       if(value < 3) return 0;
       if(value < 6)return 1;
       if(value < 8) return 2;
       if(value < 11) return 3;
       if(value >= 11) return 4;
       return 4

    }
}

export const weather = new WeatherService();