import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[270px]"
        resizeMode="contain"
      />
      <Text className="text-2xl font-psemibold text-white text-center">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100"> {subTitle}</Text>

      <CustomButton
        title="Create Video"
        handlePress={() => {}}
        containerStyles={"w-full mt-7"}
      />
    </View>
  );
};

export default EmptyState;
