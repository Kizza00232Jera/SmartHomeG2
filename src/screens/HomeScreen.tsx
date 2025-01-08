import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { SmartDeviceCard } from '../components/SmartDeviceCard';
import "../../global.css";

interface Device {
  id: string;
  isActive: boolean;
  type: string;
}

export const HomeScreen = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  // Fetch devices from the API
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('https://ms-iot-smart-security-production.up.railway.app/device/fetch');
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);

  // Toggle device active state
  const toggleDeviceState = (id: string) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, isActive: !device.isActive } : device
      )
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity className="active:opacity-70">
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold">Smart Home</Text>
          <TouchableOpacity className="active:opacity-70">
            <Ionicons name="create-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-4">
          <View className="flex-row flex-wrap justify-between">
            {devices.map((device) => (
              <View key={device.id} className="w-[48%] mb-4">
                <SmartDeviceCard
                  title={`Smart ${device.type}`}
                  icon={device.type === 'LIGHT' ? 'bulb-outline' : 'lock-closed-outline'}
                  isEnabled={device.isActive}
                  onToggle={() => toggleDeviceState(device.id)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
