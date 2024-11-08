import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";

const Categories = () => {
    let category = "0";

    return (
        <>
          <ThemedView style={styles.mainContainer}>
            <ThemedText type="title">Categories</ThemedText>
            <SearchBar placeholder = 'Enter category to search.' SearchIn = "1" Category = {category} />
          </ThemedView>
        </>
      );
}

export default Categories

const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 43,
      paddingHorizontal: 20,
      paddingVertical: 5,
      height:'100%',
    },
  });
  