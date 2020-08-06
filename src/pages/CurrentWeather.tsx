import React, { useEffect, useRef, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { iconPaths, weather } from '../util';

const CurrentWeather: React.FC = () => {
  const [temperature, setTemperature] = useState<number>();
  const [condition, setCondition] = useState<number>();
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    (ref.current as any)!.iconPaths = iconPaths;
  });

  useIonViewWillEnter(async () => {
    setLoading(true);
    const res = await weather.current();
    setTemperature(res.temperature);
    setCondition(res.condition);
    setLoading(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Current Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center ion-padding">
        <IonLoading message="Loading Current Weather" isOpen={loading} />
        <div className="information">
          <kws-temperature
            class="primary-value"
            scale="F"
            temperature={temperature}
          />
        </div>
        <kws-condition condition={condition} ref={ref} />
      </IonContent>
    </IonPage>
  );
};

export default CurrentWeather;
