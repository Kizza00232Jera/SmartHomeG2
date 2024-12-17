import * as React from "react";
import { View, Text, Switch } from "react-native";
import "../../global.css";


interface SmartDeviceCardProps {
  name: string;
  status: "on" | "off";
  icon: string;
  onToggle: () => void;
}

export function SmartDeviceCard({ name, status, icon, onToggle }: SmartDeviceCardProps) {
  return (
    <View className="bg-white rounded-lg p-4 m-4 border border-gray-300">
      {/* First Row */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>
        <Text className={`${status === "on" ? "text-green-500" : "text-gray-400"}`}>
          {status.toUpperCase()}
        </Text>
      </View>

      {/* Second Row */}
      <View className="flex-row justify-between items-center">
        <Text className="text-xl">{icon}</Text>
        <Switch value={status === "on"} onValueChange={onToggle} />
      </View>
    </View>
  );
}
