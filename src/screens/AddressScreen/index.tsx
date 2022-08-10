import { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const [city, setCity] = useState('');

    const onCheckout = () => {
        if(addressError) {
            Alert.alert("Fix all the errors before submitting");
            return;
        }
        if(!fullName) {
            Alert.alert("Please fill the Full Name");
            return;
        }
        if(!phone) {
            Alert.alert("Please fill the Phone Number");
            return;
        }
        if(!address) {
            Alert.alert("Please fill the Address");
            return;
        }
        if(!city) {
            Alert.alert("Please fill the City");
            return;
        }
    };

    const validateAddress = () => {
        if(address.length < 3) {
            setAddressError('Address Very Short')
        }
    };

    return (

        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        > 
            <ScrollView style={styles.root}>

                <View style={styles.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={setCountry}
                    >
                        {countries.map(country => (
                            <Picker.Item value={country.code} label={country.name} />
                        ))}
                        
                    </Picker>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Full Name (First and Last Name)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput 
                        keyboardType={'phone-pad'}
                        style={styles.input}
                        placeholder="Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter Address"
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError('');
                        }}
                    />
                    {!!addressError && <Text style={{color: 'red'}}>{addressError}</Text>}
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Full Name (First and Last Name)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <Button 
                    text={"Proceed to Payment"} 
                    onPress={onCheckout}
                    containerStyles={{backgroundColor: '#fa7e37', borderColor: '#fa7e37'}}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddressScreen;