import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SmartDeviceCard } from '../components/SmartDeviceCard';
import { SmartLightControl } from '../components/SmartLightControl';
import { BottomNavigation } from '../components/BottomNavigation';

export const HomeScreen = () => {
  const [devices, setDevices] = useState({
    doors: false,
    tv1: false,
    tv2: false,
    camera: false,
  });
  
  const [lights, setLights] = useState({
    main: 50,
    floor: 30,
  });
  
  const [currentTab, setCurrentTab] = useState('home');

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
            <View className="w-[48%] mb-4">
              <SmartDeviceCard
                title="Smart Doors"
                icon="lock-closed-outline"
                isEnabled={devices.doors}
                onToggle={() => setDevices(prev => ({ ...prev, doors: !prev.doors }))}
              />
            </View>
            <View className="w-[48%] mb-4">
              <SmartDeviceCard
                title="Smart TV"
                icon="tv-outline"
                isEnabled={devices.tv1}
                onToggle={() => setDevices(prev => ({ ...prev, tv1: !prev.tv1 }))}
              />
            </View>
            <View className="w-[48%] mb-4">
              <SmartDeviceCard
                title="Smart TV 2"
                icon="tv-outline"
                isEnabled={devices.tv2}
                onToggle={() => setDevices(prev => ({ ...prev, tv2: !prev.tv2 }))}
              />
            </View>
            <View className="w-[48%] mb-4">
              <SmartDeviceCard
                title="Smart Camera"
                icon="camera-outline"
                isEnabled={devices.camera}
                onToggle={() => setDevices(prev => ({ ...prev, camera: !prev.camera }))}
              />
            </View>
          </View>

          <View className="bg-white p-4 rounded-xl mt-4">
            <Text className="text-xl font-semibold mb-4">Smart Lights</Text>
            <SmartLightControl
              title="Main light"
              value={lights.main}
              onValueChange={(value) => setLights(prev => ({ ...prev, main: value }))}
            />
            <SmartLightControl
              title="Floor lamp"
              value={lights.floor}
              onValueChange={(value) => setLights(prev => ({ ...prev, floor: value }))}
            />
          </View>

          <TouchableOpacity className="bg-[#00BCD4] p-4 rounded-xl mt-6 mb-4 active:opacity-80">
            <Text className="text-white text-center text-lg font-semibold">Add device</Text>
          </TouchableOpacity>
        </ScrollView>

        <BottomNavigation
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </View>
    </SafeAreaView>
  );
};