import * as React from "react";
import { View, Text } from "react-native";
import "../../global.css";

interface WeatherWidgetProps {
  temperature: number;
  condition: string;
  humidity: number;
}

export function WeatherWidget({ temperature, condition, humidity }: WeatherWidgetProps) {
  return (
    <View className="bg-blue-500 rounded-2xl p-6 m-4 border border-black">
      {/* Title Row */}
      <Text className="text-3xl font-bold text-white mb-4 text-center">
        Current Weather
      </Text>

      {/* Temperature and Condition Row */}
      <View className="flex-row justify-between items-center">
        <Text className="text-4xl font-bold text-white">{`${temperature}°C`}</Text>
        <Text className="text-lg text-white ml-4 text-right">{condition}</Text>
      </View>

      {/* Humidity Row */}
      <Text className="text-sm text-white mt-4 text-center">
        Humidity: {humidity}%
      </Text>
    </View>
  );
}
