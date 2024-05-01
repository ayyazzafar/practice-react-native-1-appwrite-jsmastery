import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

export default function SignUp() {
  let { isLoggedIn, user, isLoading, setIsLoggedIn, setUser, setIsLoading } =
    useGlobalContext();

  let [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const submitFun = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill all fields");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      // set it to global state...
      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
    // createUser
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl text-semibold mt-10 font-semibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChange={(e) => {
              setForm({ ...form, username: e });
            }}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChange={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChange={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submitFun}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
