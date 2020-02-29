/* eslint-disable prettier/prettier */
import {  createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FeaturedPlayList from '../pages/featuredPlayList';
import PlayListTracks from '../pages/playListTracks';

import strings from '../strings';

const AppNavigator = createStackNavigator({
    FeaturedPlayList: {
        screen: FeaturedPlayList,
        navigationOptions: {
            title:strings.home,
        },
},
PlayListTracks: {
    screen: PlayListTracks,
    navigationOptions: {
        title:strings.home,
    },
},
   },
    {
        initialRouteName: 'FeaturedPlayList',
        mode: 'card',
        headerMode: 'screen',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#3f51b5',
                 borderWidth: 1,
                 borderBottomColor: 'white' ,

                },
                headerTitleStyle:{
                    color:'#fff',
                },
                headerBackTitleStyle:{
                    color:'transparent',

                },
                headerTintColor:'#fff',
        },
    });


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
