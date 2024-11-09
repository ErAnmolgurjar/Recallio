import React , { useEffect, useState, useCallback } from "react";
import { RefreshControl, ScrollView, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SearchBar } from "@/components/SearchBar";
import { MemoryCard } from "@/components/MemoryCard";

function MyMind() {
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
      const data = await response.json();
      setImages(data);
      setDisplayedImages(data.slice(0, 6));
      setRefreshing(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchImages().finally(() => {
      setRefreshing(false);
    });
  }, []);
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setCurrentIndex(6);
  //   setDisplayedImages(images.slice(0, 6));
  //   // fetchImages().finally(() => {
  //   //   setRefreshing(false);
  //   // });
  // }, [images]);

  const handleScroll = (event) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;
    const offsetY = event.nativeEvent.contentOffset.y;
    if (contentHeight - layoutHeight - offsetY < 20 && hasMore) {
      loadMoreImages();
    }
  };

  const loadMoreImages = () => {
    if (currentIndex >= images.length) {
      setHasMore(false);
      return;
    }

    const nextIndex = currentIndex + 6;
    const newImages = images.slice(currentIndex, nextIndex); 
    setDisplayedImages((prevImages) => [...prevImages, ...newImages]);
    setCurrentIndex(nextIndex);
  };

  const memoryCards = Array.from({ length: 100 });
  const link = "";
  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title">My Mind</ThemedText>
        <SearchBar placeholder="Enter keywords to search in mind" />
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} onScroll={handleScroll} scrollEventThrottle={400}>
          <View style={styles.cardsContainer}>
          {images.map((imageData, index) => (
              <MemoryCard
                text={"Image " + (index+1)}
                imageLink={imageData.url}
                link=""
                key={index}
              />
            ))}
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
