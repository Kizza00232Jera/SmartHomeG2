import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import "../../global.css";
import NotificationList from "../components/NotificationList";

export const NotificationScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity className="active:opacity-70">
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold">Notifications</Text>
          <TouchableOpacity className="active:opacity-70">
            <Ionicons name="create-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View>
          <NotificationList/>
        </View>
      </View>
    </SafeAreaView>
  );
};
