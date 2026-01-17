import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home';
import Profile from '../screens/profile';
import Cart from "../screens/Cart";

export function registerScreens() {
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('Profile', () => Profile);
    Navigation.registerComponent('Cart', () => Cart);
}
