import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";
import { MemoryCard } from "@/components/MemoryCard";

function MyMind() {
  const memoryCards = Array.from({ length: 100 }); // Create an array of 10 elements
  const link = "";
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title">My Mind</ThemedText>
        <SearchBar placeholder="Enter keywords to search in mind" />
        <ScrollView>
          <View style={styles.cardsContainer}>
            {memoryCards.map((_, index) => (
              <MemoryCard text={index.toString()} imageLink="https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" link = {link} key={index} />
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
