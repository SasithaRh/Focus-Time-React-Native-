import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {TextInput} from 'react-native-paper';
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes } from "../../utils/sizes";

export const Focus = () => {
 const [focusItem, setFocusItem] = useState(null);

return (
        <View style={styles.titleContainer}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="What You Focus On"
          style={{ flex: 1 }}
          maxLength={50}
          value={focusItem}
         onSubmitEditing={({ nativeEvent: { text } }) => setFocusItem(text)}
        />
        {focusItem}
        <RoundedButton
          style={styles.addSubject}
          size={50}
          title="dfdsf"
          onPress={() => addSubject(focusItem)}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  titleContainer: { flex: 0.5, padding: 16, justifyContent: "center" },
  title: {
    color: "white",
    fontWeight: "bold",
    padding: 16,
    fontSize: fontSizes.lg,
  },
  addSubject: { marginLeft: 10, alignSelf: "center" },
}); 

