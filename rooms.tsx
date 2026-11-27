
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

const rooms = [
  { name: "Anatomy Study Room", subject: "Anatomy", members: 0 },
  { name: "Physiology Focus", subject: "Physiology", members: 0 },
  { name: "Pathology Group", subject: "Pathology", members: 0 }
];

export default function RoomsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.brand}>MedDecode Academia</Text>
      <Text style={styles.title}>Study Rooms</Text>
      <Text style={styles.subtitle}>
        Study together. Grow together.
      </Text>

      <TouchableOpacity style={styles.create}>
        <Text style={styles.createText}>+ Create a Study Room</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Explore Rooms</Text>

      {rooms.map((room, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.roomName}>{room.name}</Text>
          <Text style={styles.subject}>{room.subject}</Text>
          <Text style={styles.members}>
            {room.members} participants
          </Text>
          <TouchableOpacity style={styles.join}>
            <Text style={styles.joinText}>Join Room</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1F3A", padding: 22 },
  brand: { color: "#D6B15E", fontSize: 15, marginTop: 35 },
  title: { color: "#F5F0E6", fontSize: 30, fontWeight: "bold", marginTop: 22 },
  subtitle: { color: "#AAB8C8", marginTop: 8 },
  create: { backgroundColor: "#D6B15E", padding: 17, borderRadius: 12, marginTop: 28 },
  createText: { color: "#0B1F3A", fontWeight: "bold", textAlign: "center" },
  heading: { color: "#F5F0E6", fontSize: 20, fontWeight: "bold", marginTop: 32, marginBottom: 15 },
  card: { backgroundColor: "#142C4B", padding: 20, borderRadius: 16, marginBottom: 15 },
  roomName: { color: "#F5F0E6", fontSize: 17, fontWeight: "bold" },
  subject: { color: "#D6B15E", marginTop: 8 },
  members: { color: "#AAB8C8", marginTop: 8 },
  join: { borderWidth: 1, borderColor: "#D6B15E", padding: 12, borderRadius: 10, marginTop: 15 },
  joinText: { color: "#D6B15E", textAlign: "center", fontWeight: "bold" }
});
