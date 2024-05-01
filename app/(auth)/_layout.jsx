import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="sign-in"
        ></Stack.Screen>

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="sign-up"
        ></Stack.Screen>
      </Stack>
      <StatusBar backgroundColor={"#161622"} style="light" />
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
