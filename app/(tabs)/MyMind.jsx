import React , { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";
import { MemoryCard } from "@/components/MemoryCard";

function MyMind() {
  const [images, setImages] = useState([]);  // State to hold the fetched images
  const [isLoading, setIsLoading] = useState(true);  // State to track loading

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
        const data = await response.json();
        setImages(data);  // Set the response data to the state
        setIsLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const memoryCards = Array.from({ length: 100 }); // Create an array of 10 elements
  const link = "";
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title">My Mind</ThemedText>
        <SearchBar placeholder="Enter keywords to search in mind" />
        <ScrollView>
          <View style={styles.cardsContainer}>
          {isLoading ? (
            <ThemedText>Loading images...</ThemedText>  // Display loading text while images are being fetched
          ) : (
            images.map((imageData, index) => (
              <MemoryCard
                text={`Image ${index + 1}`}
                imageLink={imageData.url}
                link=""
                key={index}
              />
            ))
          )}
            {/* {memoryCards.map((_, index) => (
              <MemoryCard text={index.toString()} imageLink="https://www.shutterstock.com/image-photo/orange-cat-sits-looking-straight-600nw-2479857351.jpg" link = {link} key={index} />
            ))} */}
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
