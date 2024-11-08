import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";
import { MemoryCard } from "@/components/MemoryCard";

function MyMind() {
  const memoryCards = Array.from({ length: 100 }); // Create an array of 10 elements
  console.log(memoryCards);
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title">My Mind</ThemedText>
        <SearchBar placeholder="Enter keywords to search in mind" />
        <ScrollView>
          <View style={styles.cardsContainer}>
            {memoryCards.map((_, index) => (
              <MemoryCard text={index.toString()} key={index} />
            ))}
          </View>
        </ScrollView>
      </ThemedView>
    </>
  );
}

export default MyMind;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 43,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:"wrap",
    gap:10,
    marginBottom:100,
    justifyContent:"space-around",
  },
});
