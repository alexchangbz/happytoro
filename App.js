import { StyleSheet, View } from 'react-native';
import BondTab from './components/bondTab';
import Header from './components/header';
import NavigationTab from './components/navigationTab';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <BondTab />
      <NavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
