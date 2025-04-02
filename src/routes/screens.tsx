import {HomePage} from '../pages/home';
import {ProfilePage} from '../pages/profile';
import {Routes} from './routesNames';

export const homeScreens = () => [
  {
    name: Routes.Home,
    component: HomePage,
    options: {title: 'Home', headerShown: true},
  },
];
export const profileScreens = () => [
  {
    name: Routes.Profile,
    component: ProfilePage,
    options: {title: 'Mi perfil', headerShown: true},
  },
];
