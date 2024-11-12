import React , { useEffect, useState, useCallback } from "react";
import { RefreshControl, ScrollView, View, StyleSheet, ActivityIndicator } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";
import { MemoryCard } from "@/components/MemoryCard";

function MyMind() {
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardloading, setcardloading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async (limit = 10) => {
    try {
      setcardloading(true);
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
      const data = await response.json();
      
      setImages((prevImages) => [...prevImages, ...data]);
      setDisplayedImages((prevDisplayed) => [...prevDisplayed, ...data]);
      
      if (data.length < limit) {
        setHasMore(false);
      }
      setcardloading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setcardloading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCurrentIndex(0);
    setImages([]);
    setDisplayedImages([]);
    fetchImages().finally(() => {
      setRefreshing(false);
    });
  }, []);

  const handleScroll = (event) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;
    const offsetY = event.nativeEvent.contentOffset.y;
    const distanceFromBottom = contentHeight - layoutHeight - offsetY;
    if (distanceFromBottom < 150) {
      loadMoreImages();
    }
  };

  const loadMoreImages = () => {
    // if (currentIndex >= images.length) {
    //   // If no more images to load, set hasMore to false
    //   setHasMore(false);
    //   return;
    // }

    const nextIndex = currentIndex + 10;
    const newImages = images.slice(currentIndex, nextIndex);
    setDisplayedImages((prevImages) => [...prevImages, ...newImages]);
    setCurrentIndex(nextIndex);
    fetchImages().finally(() => {
      setRefreshing(false);
    });
  };

  const memoryCards = Array.from({ length: 100 });
  const link = "";
  
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title">My Mind</ThemedText>
        <SearchBar placeholder="Enter keywords to search in mind" />
        <ScrollView 
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} 
          onScroll={handleScroll} 
          scrollEventThrottle={100}
        >
          <View style={styles.cardsContainer}>
            {displayedImages.map((displayedImage, index) => (
              <MemoryCard
                text={"Image " + (index + 1)}
                imageLink={displayedImage.url}
                link=""
                key={index}
              />
            ))}
            {cardloading && <ActivityIndicator size="large" />}
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
    height:'100%',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:"wrap",
    gap:10,
    marginBottom:50,
    justifyContent:"space-around",
  },
});
