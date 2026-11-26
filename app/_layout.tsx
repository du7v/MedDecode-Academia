import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0B1F3A" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0B1F3A" }
        }}
      />
    </>
  );
}
