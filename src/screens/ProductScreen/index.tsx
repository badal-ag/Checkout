import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, ScrollView, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Auth, DataStore } from 'aws-amplify';
import { Product, CartProduct } from '../../models';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    const navigation = useNavigation();

    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {

        if(!route.params?.id) {
            return;
        }
        DataStore.query(Product, route.params.id).then(setProduct);

    }, [route.params?.id]);

    useEffect(() => {
        if(product?.options) {
            setSelectedOption(product.options[0])
        }
    }, [])

    if(!product) {
        return <ActivityIndicator />;
    }

    const onAddToCart = async () => {

        const userData = await Auth.currentAuthenticatedUser();

        if(!product || !userData) {
            return;
        }

        const newCartProduct = new CartProduct({
            userSub: userData.attributes.sub,
            quantity,
            option: selectedOption,
            productID: product.id,
        });

        await DataStore.save(newCartProduct);
        navigation.navigate('cart');

    }



    return (
        <ScrollView style={styles.root}>

            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images} />

            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map((option) => (
                    <Picker.Item label={option} value={option} />
                ))}
            </Picker>

            <Text style={styles.price}>
                ${product.price.toFixed(2)}{" "}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
                )}
            </Text>

            <Text style={styles.description}>{product.description}</Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button
                text={"Add to Cart"}
                onPress={onAddToCart}
                containerStyles={{ backgroundColor: '#e3c985' }}
            />

            <Button
                text={"Buy Now"}
                onPress={() => {
                    console.warn("Buy Now");
                }}
            />

        </ScrollView>
    );
};

export default ProductScreen;