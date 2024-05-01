import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";
import { router, usePathname } from "expo-router";

export default function SearchInput({ initialQuery = "" }) {
  const pathName = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="border-2 border-black-200 rounded-2xl focus:border-secondary w-full h-16 px-4 bg-black-100 items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder={"Search for a video topic"}
        placeholderTextColor={"#cdcde0"}
        onChangeText={(e) => {
          setQuery(e);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query)
            return Alert.alert("Missing Query", "Please enter a search query");

          if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
