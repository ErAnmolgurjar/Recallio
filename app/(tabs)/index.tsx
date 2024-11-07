import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

function Home() {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText type="title">
        Home
      </ThemedText>
    </ThemedView>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  
});
