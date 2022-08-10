import { View, Text, Pressable, StyleSheet } from 'react-native';

const QuantitySelector = ({quantity, setQuantity}) => {

    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));
    };

    const onPlus = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({

    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 130,
    },

    quantity: {
        color: '#007eb9',
    },

    button: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1',
    },

    buttonText: {
        fontSize: 18,
    }, 

}); 

export default QuantitySelector;