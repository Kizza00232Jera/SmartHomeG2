import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';
import "../../global.css";


type NotificationItem = {
  id: string;
  creationAt: string;
  hasView: boolean;
  distance: number;
  photo: string;
};

const NotificationList = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('https://run.mocky.io/v3/3f0af33e-2e9e-4d10-a21c-fd9c9ce05c38');
        setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <View className="flex-row p-2 border-b border-gray-300">
      <Image source={{ uri: item.photo }} className="w-12 h-12 mr-2" />
      <View className="flex-1">
        <Text>ID: {item.id}</Text>
        <Text>Created At: {new Date(item.creationAt).toLocaleString()}</Text>
        <Text>Has View: {item.hasView ? 'Yes' : 'No'}</Text>
        <Text>Distance: {item.distance} meters</Text>
      </View>
    </View>
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
