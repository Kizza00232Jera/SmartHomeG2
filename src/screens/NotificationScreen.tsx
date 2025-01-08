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
  image: string;
};

export const NotificationScreen = () => {
  const [selectedNotification, setSelectedNotification] = useState<NotificationItem | null>(null);

  const handleNotificationSelect = async (notification: NotificationItem) => {
    // Set the selected notification
    setSelectedNotification(notification);

    // Trigger the endpoint to mark the notification as read
    try {
      const response = await fetch(
        `https://ms-iot-smart-security-production.up.railway.app/notification/${notification.id}`,
        {
          method: "GET", // Using GET request to mark the notification as read
        }
      );
      if (response.ok) {
        console.log("Notification marked as read");
      } else {
        console.error("Failed to mark notification as read");
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

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
            <View style={{ width: 24 }} />
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
              <Text>Created At: {new Date(selectedNotification.creationAt).toLocaleString()}</Text>
              <Text>Distance: {selectedNotification.distance} meters</Text>
              <Text>Viewed: {selectedNotification.hasView ? "Yes" : "No"}</Text>
              <Image
                source={{ uri: selectedNotification.image }}
                className="w-full h-64 mt-4"
              />
              <Text>ID: {selectedNotification.id}</Text>
            </View>
          ) : (
            <NotificationList onSelectNotification={handleNotificationSelect} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
