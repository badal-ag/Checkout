import { createStackNavigator } from '@react-navigation/stack';
import AddressScreen from '../screens/AddressScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name='ShoppingCart' component={ShoppingCartScreen} options={{title: 'Shopping Cart'}} />
                <Stack.Screen name='AddressScreen' component={AddressScreen} options={{title: 'Enter Address'}}/>
            </Stack.Navigator>
    )
}

export default ShoppingCartStack;