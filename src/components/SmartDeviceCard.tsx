import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SmartDeviceCardProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  isEnabled: boolean;
  onToggle: () => void;
}

export const SmartDeviceCard = ({ title, icon, isEnabled, onToggle }: SmartDeviceCardProps) => {
  return (
    <TouchableOpacity 
      onPress={onToggle}
      className="bg-white p-4 rounded-xl shadow-sm active:opacity-80"
    >
      <View className="flex-row justify-between items-center">
        <Ionicons 
          name={icon} 
          size={24} 
          color={isEnabled ? '#00BCD4' : '#9CA3AF'} 
        />
        <Switch
          value={isEnabled}
          onValueChange={onToggle}
          trackColor={{ false: '#D1D5DB', true: '#00BCD4' }}
          thumbColor="#FFFFFF"
        />
      </View>
      <Text className="mt-2 font-semibold text-gray-800">{title}</Text>
    </TouchableOpacity>
  );
};