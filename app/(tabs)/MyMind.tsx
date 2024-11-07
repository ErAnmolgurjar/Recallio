import React from 'react'
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
function MyMind() {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText type="title">
        My Mind
      </ThemedText>
    </ThemedView>
  )
}

export default MyMind

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  
});
