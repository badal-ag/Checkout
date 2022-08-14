import { View, SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler'
import Router from './src/Router';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';
Amplify.configure(config)

const App = () => {

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </View>
  );
}

export default withAuthenticator(App);
