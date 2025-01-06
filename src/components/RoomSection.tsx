import * as React from "react";
import "../../global.css";
import { ScrollView, View, Text } from "react-native";

interface RoomSectionProps {
  roomName: string;
  children: React.ReactNode;
}

export function RoomSection({ roomName, children }: RoomSectionProps) {
  return (
    <View className="m-4">
      <Text className="text-xl font-bold text-gray-900 mb-2">
        {roomName}
      </Text>
      <ScrollView horizontal>
        <View className="flex flex-col">
          {children}
        </View>
      </ScrollView>
    </View>
  );
}
