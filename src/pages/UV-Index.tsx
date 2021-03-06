import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLoading,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';

import './uvIndex.css';
import { weather } from '../util';

const UVIndex: React.FC = () => {
  const [uvIndex, setUVIndex] = useState<number>();
  const [riskLevel, setRiskLevel] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const descriptionStyle = {
    marginTop: '16px',
  };
  const advice: Array<string> = [
    'Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen. ' +
      'Bright surfaces, such as sand, water and snow, will increase UV exposure.',
    'Stay in the shade near midday when the sun is strongest. If outdoors, wear sun protective clothing, ' +
      'a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, ' +
      'even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water and snow, ' +
      'will increase UV exposure.',
    'Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, ' +
      'a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, ' +
      'even on cloudy days, and after swimming or sweating. Bright surfaces, such sand, water and snow, ' +
      'will increase UV exposure.',
    'Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, ' +
      'a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, ' +
      'even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water and snow, ' +
      'will increase UV exposure.',
    'Try to avoid sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, ' +
      'a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, ' +
      'even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water and snow, ' +
      'will increase UV exposure.',
  ];
  useIonViewWillEnter(async () => {
    setLoading(true);
    const res = await weather.uvIndex();
    setUVIndex(res.value);
    setRiskLevel(res.riskLevel);
    setLoading(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UV Index</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonLoading message="UV Index is loading..." isOpen={loading} />
        <kws-uv-index class="primary-value" uv-index={uvIndex} />
        <div className="description" style={descriptionStyle}>
          {advice[riskLevel]}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UVIndex;
