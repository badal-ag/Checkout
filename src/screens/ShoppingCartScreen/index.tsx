import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';

import { DataStore, Auth } from 'aws-amplify';
import { Product, CartProduct } from '../../models';

const ShoppingCartScreen = () => {

    const totalPrice = cartProducts.reduce((summedPrice, product) => 
        summedPrice + product.item.price * product.quantity
    , 0);  

    const navigation = useNavigation();
    
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            DataStore.query(CartProduct).then(setCartProducts);
        };
        fetchProducts();
    }, []);

    const onCheckout = () => {
        navigation.navigate('AddressScreen');
    }

    return (
        <View style={styles.page}>

            <FlatList 
                data={cartProducts}
                renderItem={({ item }) => (
                    <CartProductItem cartItem={item} />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{fontSize: 18}}>
                            Subtotal ({cartProducts.length}) items: {" "}
                            <Text style={{color: '#e47911', fontWeight: 'bold'}}> ${totalPrice.toFixed(2)} </Text>
                        </Text>

                        <Button 
                            text="Proceed to Checkout"
                            onPress={onCheckout}
                            containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}
                        />
                    </View>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({

    page: {
        padding: 10,
    },

});

export default ShoppingCartScreen;