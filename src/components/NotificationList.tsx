import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import "../../global.css";

type NotificationItem = {
  id: string;
  creationAt: string;
  hasView: boolean;
  distance: number;
  image: string;
};

type NotificationListProps = {
  onSelectNotification: (notification: NotificationItem) => void;
};

const NotificationList = ({ onSelectNotification }: NotificationListProps) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "https://ms-iot-smart-security-production.up.railway.app/notification/fetch"
        );
        setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <TouchableOpacity onPress={() => onSelectNotification(item)}>
      <View className={`flex-row p-2 border-b border-gray-300 ${item.hasView ? 'bg-gray-200' : ''}`}>
        <Image source={{ uri: item.image }} className="w-12 h-12 mr-2" />
        <View className="flex-1">
          <Text>ID: {item.id}</Text>
          <Text>Created At: {new Date(item.creationAt).toLocaleString()}</Text>
          {/* <Text>Has View: {item.hasView ? "Yes" : "No"}</Text> */}
          <Text>Distance: {item.distance} meters</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default NotificationList;
