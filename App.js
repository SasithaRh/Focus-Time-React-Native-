import  React ,{useState}from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import Constants from 'expo-constants';
import {Focus} from './src/features/focus/Focus'

export default function App() {
  const [state,setState] = useState("Sasitha")

  
   

  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#22dc8f',
    padding: 20,
    paddingTop:40
  },

});
