import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
    IonLoading,
    IonList,
    IonItem,
    useIonViewWillEnter

} from '@ionic/react';
import './forecast.css';
import DailyForecast from "../components/DailyForecast";
import {WeeklyForecast} from "../models";
import {  weather } from '../util';

const Forecast: React.FC = () => {
  const [forecast, setForecast] = useState<WeeklyForecast>([]);
  const [loading, setLoading] = useState(false);

  useIonViewWillEnter(async ()=> {
    setLoading(true)
    const res = await weather.forecast();
    setForecast(res)
    setLoading(false)
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Forecast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center ion-padding">
        <IonLoading message="Forecast is loading" isOpen={loading}/>
        <IonList>
          {forecast.map((f, index) => (
              <IonItem key={index}>
                <DailyForecast scale="F" forecast={f} />
              </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Forecast;
