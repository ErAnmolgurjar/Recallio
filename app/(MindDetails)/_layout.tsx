import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

const _layout = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="[id]" options={{
            headerTitle:"Details",
          }}/>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default _layout;
