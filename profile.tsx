
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.brand}>MedDecode Academia</Text>
      <Text style={styles.heading}>My Profile</Text>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>M</Text>
      </View>

      <Text style={styles.name}>Medical Student</Text>
      <Text style={styles.username}>@username</Text>

      <View style={styles.card}>
        <Text style={styles.label}>UNIVERSITY</Text>
        <Text style={styles.value}>Add your university</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>ACADEMIC YEAR</Text>
        <Text style={styles.value}>Medical Student</Text>
      </View>

      <Text style={styles.section}>My Statistics</Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.number}>0</Text>
          <Text style={styles.label}>Study Hours</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.number}>0</Text>
          <Text style={styles.label}>Friends</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.number}>0</Text>
          <Text style={styles.label}>XP</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1F3A", padding: 24 },
  brand: { color: "#D6B15E", fontSize: 15, marginTop: 35 },
  heading: { color: "#F5F0E6", fontSize: 30, fontWeight: "bold", marginTop: 20 },
  avatar: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: "#D6B15E", alignSelf: "center",
    justifyContent: "center", alignItems: "center", marginTop: 35
  },
  avatarText: { color: "#0B1F3A", fontSize: 38, fontWeight: "bold" },
  name: { color: "#F5F0E6", fontSize: 22, textAlign: "center", marginTop: 15 },
  username: { color: "#D6B15E", textAlign: "center", marginTop: 6 },
  card: { backgroundColor: "#142C4B", padding: 18, borderRadius: 14, marginTop: 18 },
  label: { color: "#AAB8C8", fontSize: 11, letterSpacing: 1 },
  value: { color: "#F5F0E6", fontSize: 16, marginTop: 8 },
  section: { color: "#F5F0E6", fontSize: 20, fontWeight: "bold", marginTop: 30 },
  stats: { flexDirection: "row", justifyContent: "space-between", marginTop: 18 },
  stat: { backgroundColor: "#142C4B", padding: 15, borderRadius: 12, alignItems: "center" },
  number: { color: "#D6B15E", fontSize: 24, fontWeight: "bold" }
});
