import { useState, useEffect } from 'react';
import { View,  StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';

const HomeScreen = ({searchValue}: {searchValue: string}) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        DataStore.query(Product).then(setProducts);

        /*  Explantory Code for Above Line
        
        const fetchProducts = async () => {
            const results = await DataStore.query(Product);
            setProducts(results);
        }
        fetchProducts();*/

    }, []);

    return (
        <View style={styles.page}>
            <FlatList 
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    page: {
        padding: 10,
    },
    
});

export default HomeScreen;