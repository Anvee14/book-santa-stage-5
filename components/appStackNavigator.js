import React from 'react';
import {createStackNavigator, creatStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen'
import RecieverDetail from '../screens/recieverDetailScreen'

export const AppStackNavigator = createStackNavigator({
    BookDonateList :{
    screen:BookDonateScreen,
     navigationOptions:{
         headerShown:false
     }   
    },
    RecieverDetail:{
        screen:RecieverDetail,
        navigationOptions:{
            headerShown:false
        }   
    },
    
},
{
    initialRouteName:"BookDonateList"
}
)