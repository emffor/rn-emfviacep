import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApiCep } from './src/screen/ApiCep';
import { Home } from './src/screen/Home';
import theme from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>   
      <StatusBar style="light" />
      {/* <Home /> */}
      <ApiCep />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
});
