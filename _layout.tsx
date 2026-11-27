
import React from "react";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0B1F3A" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#142C4B",
            borderTopColor: "#263F5C",
            height: 65,
            paddingTop: 8,
            paddingBottom: 8
          },
          tabBarActiveTintColor: "#D6B15E",
          tabBarInactiveTintColor: "#AAB8C8",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600"
          }
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="rooms" options={{ title: "Rooms" }} />
        <Tabs.Screen name="leaderboard" options={{ title: "Ranking" }} />
        <Tabs.Screen name="friends" options={{ title: "Friends" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </>
  );
}
