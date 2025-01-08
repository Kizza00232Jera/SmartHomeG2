import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import "../../global.css";


interface BottomNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ currentTab, onTabChange }: BottomNavigationProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0, 
        width: '100%',
      }}
    >
      <TouchableOpacity onPress={() => onTabChange('notifications')}>
        <Ionicons
          name="notifications"
          size={24}
          color={currentTab === 'notifications' ? '#00BCD4' : '#9CA3AF'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabChange('home')}>
        <Ionicons
          name="home"
          size={24}
          color={currentTab === 'home' ? '#00BCD4' : '#9CA3AF'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabChange('settings')}>
        <Ionicons
          name="settings"
          size={24}
          color={currentTab === 'settings' ? '#00BCD4' : '#9CA3AF'}
        />
      </TouchableOpacity>
    </View>
  );
};
