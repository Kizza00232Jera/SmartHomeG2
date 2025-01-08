import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import "../../global.css";
import NotificationList from "../components/NotificationList";

type NotificationItem = {
  id: string;
  creationAt: string;
  hasView: boolean;
  distance: number;
  photo: string;
};

export const NotificationScreen = () => {
  const [selectedNotification, setSelectedNotification] = useState<NotificationItem | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="flex-row justify-between items-center p-4">
          {selectedNotification ? (
            <TouchableOpacity
              className="active:opacity-70"
              onPress={() => setSelectedNotification(null)}
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 24 }} /> // Placeholder for alignment
          )}
          <Text className="text-xl font-semibold">
            {selectedNotification ? "Notification Details" : "Notifications"}
          </Text>
          <TouchableOpacity className="active:opacity-70">
            <Ionicons name="create-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View>
          {selectedNotification ? (
            <View className="p-4">
              <Text>ID: {selectedNotification.id}</Text>
              <Text>Created At: {new Date(selectedNotification.creationAt).toLocaleString()}</Text>
              <Text>Has View: {selectedNotification.hasView ? "Yes" : "No"}</Text>
              <Text>Distance: {selectedNotification.distance} meters</Text>
              <Image
                source={{ uri: selectedNotification.photo }}
                className="w-full h-64 mt-4"
              />
            </View>
          ) : (
            <NotificationList onSelectNotification={setSelectedNotification} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
