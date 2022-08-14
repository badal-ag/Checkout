import { SafeAreaView } from 'react-native';
import Button from '../../components/Button';
import { Auth } from 'aws-amplify';

const MenuScreen = () => {

    const onSignout = () => {
        Auth.signOut();
    }

    return (
        <SafeAreaView>
            <Button text="Sign Out" onPress={onSignout} />
        </SafeAreaView>
    )
}

export default MenuScreen