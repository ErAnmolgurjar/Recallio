import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";

function Home() {
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title">Home</ThemedText>
        <SearchBar/>
      </ThemedView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 43,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height:'100%',
  },
});
