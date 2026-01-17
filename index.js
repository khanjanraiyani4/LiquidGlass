import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation/registerScreens';
import { setBottomTabs } from './src/navigation/setRoot';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    setBottomTabs();
});
