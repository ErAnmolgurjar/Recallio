import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";

function Details() {
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        
      </ThemedView>
    </>
  );
}

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 43,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height:'100%',
  },
});
