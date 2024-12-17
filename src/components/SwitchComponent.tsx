import React, { useState } from 'react';
import { View, Text, Switch, Dimensions } from 'react-native';
import '../../global.css';

interface SwitchComponentProps {
  roomLabel: string;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({ roomLabel }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className="px-6 py-4 my-4 bg-gray-500 rounded-2xl border border-black w-full">
      <Text className="text-lg text-red-500">{roomLabel}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;
