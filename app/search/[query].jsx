import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import VideoCard from "../../components/VideoCard";
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data, isLoading, refretch } = useAppwrite(() => searchPosts(query));
  useEffect(() => {
    refretch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 ">
              <Text className="font-pmedium text-sm text-gray-100">
                Search Results
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                {query}
              </Text>

              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} />
              </View>
            </View>
          );
        }}
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
          return (
            <View>
              <VideoCard video={item} />
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subTitle="Try searching for something else"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
