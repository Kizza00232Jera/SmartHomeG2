import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BottomNavigation } from '../src/components/BottomNavigation';
import "../global.css";


// Import your actual screen components
import { HomeScreen } from '../src/screens/HomeScreen';
import { SettingsScreen } from '../src/screens/SettingsScreen';
import { NotificationScreen } from '../src/screens/NotificationScreen';

export default function App() {
  // State to track the current active tab
  const [currentTab, setCurrentTab] = useState('home');

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Conditionally render the screens based on active tab */}
      {currentTab === 'home' && <HomeScreen />}
      {currentTab === 'notifications' && <NotificationScreen />}
      {currentTab === 'settings' && <SettingsScreen />}

      {/* Bottom Navigation */}
      <BottomNavigation currentTab={currentTab} onTabChange={handleTabChange} />
    </View>
  );
}
