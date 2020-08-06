import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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

  useIonViewWillEnter(async ()=> {
    const res = await weather.forecast();
    setForecast(res)
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Forecast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center ion-padding">
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
