import React from 'react';
import { View, Text } from 'react-native';
// import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

interface SmartLightControlProps {
  title: string;
  value: number;
  onValueChange: (value: number) => void;
}

export const SmartLightControl = ({ title, value, onValueChange }: SmartLightControlProps) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <View className="flex-row items-center flex-1">
        <Ionicons name="bulb-outline" size={24} color="#00BCD4" />
        <Text className="ml-2 text-gray-800">{title}</Text>
      </View>
      {/* <View className="flex-1">
        <Slider
          value={value}
          onValueChange={onValueChange}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#00BCD4"
          maximumTrackTintColor="#D1D5DB"
          thumbTintColor="#00BCD4"
        />
      </View> */}
    </View>
  );
};