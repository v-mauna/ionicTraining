import React, {useEffect, useRef, useState} from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { iconPaths, weather } from '../util';

const CurrentWeather: React.FC = () => {
  const [temperature, setTemperature] = useState<number>();
  const [condition, setCondition] = useState<number>();

  const ref = useRef(null);
  useEffect(()=>{
    (ref.current as any)!.iconPaths = iconPaths;
  });

  useIonViewWillEnter(async ()=> {
    const res = await weather.current();
    setTemperature(res.temperature);
    setCondition(res.condition);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Current Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center ion-padding" >
        <div className="information">
          <kws-temperature class="primary-value" scale="F" temperature={temperature}/>
        </div>
        <kws-condition condition={condition} ref={ref} />
      </IonContent>
    </IonPage>
  );
};

export default CurrentWeather;
