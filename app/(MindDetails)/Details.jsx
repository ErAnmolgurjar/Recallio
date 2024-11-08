import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

function Details({ route }) {
  //console.log(route.Details);
  const { text, imageLink } = route.params ?? {};

  return (
    <>
      <ThemedView style={styles.mainContainer}>
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
});
