import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {sunny, cloud, calendar} from 'ionicons/icons'
import CurrentWeather from './pages/CurrentWeather';
import Forecast from './pages/Forecast';
import UVIndex from './pages/UV-Index';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/styles.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/current-weather" component={CurrentWeather} exact={true} />
          <Route path="/forecast" component={Forecast} exact={true} />
          <Route path="/uv-index" component={UVIndex} />
          <Route path="/" render={() => <Redirect to="/current-weather" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar color="primary" slot="bottom">
          <IonTabButton tab="current-weather" href="/current-weather">
            <IonIcon icon={cloud} />
            <IonLabel>Current Weather</IonLabel>
          </IonTabButton>
          <IonTabButton tab="forecast" href="/forecast">
            <IonIcon icon={calendar} />
            <IonLabel>Forecast</IonLabel>
          </IonTabButton>
          <IonTabButton tab="uv-index" href="/uv-index">
            <IonIcon icon={sunny} />
            <IonLabel>UV Index</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
