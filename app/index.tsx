import { ScrollView, View } from "react-native";
import "../global.css";
import React from "react";
import { WeatherWidget } from "@/src/components/WeatherWidget";
import { SmartDeviceCard } from "@/src/components/SmartDeviceCard";
import { RoomSection } from "@/src/components/RoomSection";
import SwitchComponent from "@/src/components/SwitchComponent";

const App = () => {
  const [livingRoomLight, setLivingRoomLight] = React.useState(false);
  const [bedroomLight, setBedroomLight] = React.useState(false);
  const [thermostat, setThermostat] = React.useState(false);

  return (
    <ScrollView>
      <View>
        <View>
        <SwitchComponent roomLabel="Lights" />
        <SwitchComponent roomLabel="Doors" />
        <SwitchComponent roomLabel="Cameras" />
        </View>
        <RoomSection roomName="Living Room">
          <SmartDeviceCard
            name="Main Light"
            status={livingRoomLight ? "on" : "off"}
            icon="💡"
            onToggle={() => setLivingRoomLight(!livingRoomLight)}
          />
          <SmartDeviceCard
            name="Thermostat"
            status={thermostat ? "on" : "off"}
            icon="🌡️"
            onToggle={() => setThermostat(!thermostat)}
          />
        </RoomSection>

        <RoomSection roomName="Bedroom">
          <SmartDeviceCard
            name="Ceiling Light"
            status={bedroomLight ? "on" : "off"}
            icon="💡"
            onToggle={() => setBedroomLight(!bedroomLight)}
          />
        </RoomSection>
        <WeatherWidget temperature={24} condition="Sunny" humidity={65} />
      </View>
    </ScrollView>
  );
};

export default App;
