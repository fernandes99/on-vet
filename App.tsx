import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Index } from './src';
import store from './src/store';

export default function App() {
  const AndroidSafeArea = {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={AndroidSafeArea}>
        <Index />
      </SafeAreaView>
    </Provider>
  );
}
