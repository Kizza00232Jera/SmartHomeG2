import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation } from '../src/components/BottomNavigation';
import "../global.css";
import registerNNPushToken from 'native-notify';

import { HomeScreen } from '../src/screens/HomeScreen';
import { SettingsScreen } from '../src/screens/SettingsScreen';
import { NotificationScreen } from '../src/screens/NotificationScreen';

export default function App() {
  registerNNPushToken(25977, '4ajMqrrIQxDlywGyUApPik');

  // State to track the current active tab
  const [currentTab, setCurrentTab] = useState('home');

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentTab === 'home' && <HomeScreen />}
      {currentTab === 'notifications' && <NotificationScreen />}
      {currentTab === 'settings' && <SettingsScreen />}

      {/* Bottom Navigation */}
      <BottomNavigation currentTab={currentTab} onTabChange={handleTabChange} />
    </View>
  );
}
