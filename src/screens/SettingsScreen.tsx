import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import "../../global.css";

export const SettingsScreen = () => {
  return (
    <View className="flex-row justify-between items-center p-4">
    <TouchableOpacity className="active:opacity-70">
      <Ionicons name="arrow-back" size={24} color="#000" />
    </TouchableOpacity>
    <Text className="text-xl font-semibold">Settings</Text>
    <TouchableOpacity className="active:opacity-70">
      <Ionicons name="create-outline" size={24} color="#000" />
    </TouchableOpacity>
  </View>
  );
};
