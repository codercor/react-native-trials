import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-red-500 h-full w-full flex items-center justify-center">
      <StatusBar style="inverted" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

