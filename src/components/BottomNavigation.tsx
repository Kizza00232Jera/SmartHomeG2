import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BottomNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ currentTab, onTabChange }: BottomNavigationProps) => {
  return (
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-200">
      <TouchableOpacity 
        onPress={() => onTabChange('notifications')}
        className="active:opacity-70"
      >
        <Ionicons
          name="notifications"
          size={24}
          color={currentTab === 'notifications' ? '#00BCD4' : '#9CA3AF'}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => onTabChange('home')}
        className="active:opacity-70"
      >
        <Ionicons
          name="home"
          size={24}
          color={currentTab === 'home' ? '#00BCD4' : '#9CA3AF'}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => onTabChange('settings')}
        className="active:opacity-70"
      >
        <Ionicons
          name="settings"
          size={24}
          color={currentTab === 'settings' ? '#00BCD4' : '#9CA3AF'}
        />
      </TouchableOpacity>
    </View>
  );
};