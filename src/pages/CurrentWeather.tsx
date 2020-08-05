import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './currentWeather.css';

const CurrentWeather: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Current Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Current Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Current Weather" />
      </IonContent>
    </IonPage>
  );
};

export default CurrentWeather;
