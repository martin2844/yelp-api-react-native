import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreens';

const navigator = createStackNavigator({

  Search: SearchScreen,
  ResultsShow: ResultsShowScreen

},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'A donde morfo hoy?'
  }
}
); 


export default createAppContainer(navigator);


