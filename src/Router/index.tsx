import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';

const Root = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            
            <Root.Navigator screenOptions={{headerShown: false}}>
                <Root.Screen name='HomeTabs' component={BottomTabNav} />
            </Root.Navigator>

        </NavigationContainer>
    )
}

export default Router;