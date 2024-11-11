import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Link } from 'expo-router';

export function MemoryCard({ text = "", imageLink = "", link = "" }) {
  const theme = useColorScheme() ?? "light";
  let borderColor = theme === "dark" ? "#ffffff" : "#000000";
  let backgroundColor = theme === "dark" ? "#ffffff" : "#000000";
  let color = theme === "dark" ? "#000000" : "#ffffff";
  const imageSource = imageLink
    ? { uri: imageLink }
    : require("../app/appAssests/images/no-image.png");
  const discText = text ;
  // console.log(text);
  return (
    <>
    <Link href={{
        pathname: "/(MindDetails)/1", 
        params: { discText, imageLink }
      }}>
      <View style={[style.meoryCardStyle, { borderColor }]}>
        <Image style={style.memoryCardBanner} source={imageSource}></Image>
        <Text numberOfLines={2} ellipsizeMode="tail" style={[style.memoryCardText, { backgroundColor, color }]}>
          {discText}
        </Text>
      </View>
      </Link>
    </>
  );
}

const style = StyleSheet.create({
  meoryCardStyle: {
    // height:200,
    width: 190,
    // marginBottom:10,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderStyle: "solid",
    borderWidth: 2,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  memoryCardBanner: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  memoryCardText: {
    height: 40,
    // backgroundColor:'#ffffff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
  },
});
