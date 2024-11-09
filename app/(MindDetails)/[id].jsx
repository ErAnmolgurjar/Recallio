import React from "react";
import { StyleSheet, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";

function Details() {
  const id = useLocalSearchParams();
  const text = id.discText;
  const imageLink = id.imageLink;
  const imageSource = imageLink
    ? { uri: imageLink }
    : require("../appAssests/images/no-image.png");

  return (
    <>
      <ThemedView style={styles.mainContainer}>
        <Image style={styles.memoryCardBanner} source={imageSource}></Image>
        <ThemedText>{text}</ThemedText>
      </ThemedView>
    </>
  );
}

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 0,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height:'100%',
  },
  memoryCardBanner: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
