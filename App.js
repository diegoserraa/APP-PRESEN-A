
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/Rotas'

export default function App() {
  return (
  <NavigationContainer>
    <Rotas />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
