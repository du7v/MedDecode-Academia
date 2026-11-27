
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const students = [
  { name: "Medical Star", username: "@topstudent", xp: 0 },
  { name: "Student Two", username: "@student2", xp: 0 },
  { name: "Student Three", username: "@student3", xp: 0 },
  { name: "Student Four", username: "@student4", xp: 0 },
  { name: "Student Five", username: "@student5", xp: 0 }
];

export default function LeaderboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.brand}>MedDecode Academia</Text>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.subtitle}>Your effort deserves recognition.</Text>

      <View style={styles.starCard}>
        <Text style={styles.crown}>★</Text>
        <Text style={styles.starTitle}>WEEKLY MEDICAL STAR</Text>
        <Text style={styles.winner}>Coming Soon</Text>
        <Text style={styles.description}>
          The student with the highest weekly XP will be our Medical Star.
        </Text>
      </View>

      <Text style={styles.heading}>Global Rankings</Text>

      {students.map((student, index) => (
        <View style={styles.row} key={index}>
          <Text style={styles.rank}>{index + 1}</Text>
          <View style={styles.info}>
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.username}>{student.username}</Text>
          </View>
          <Text style={styles.xp}>{student.xp} XP</Text>
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
  starCard: { backgroundColor: "#142C4B", padding: 25, borderRadius: 18, alignItems: "center", marginTop: 28 },
  crown: { color: "#D6B15E", fontSize: 42 },
  starTitle: { color: "#D6B15E", fontSize: 13, letterSpacing: 2, marginTop: 10 },
  winner: { color: "#F5F0E6", fontSize: 22, fontWeight: "bold", marginTop: 14 },
  description: { color: "#AAB8C8", textAlign: "center", marginTop: 12, lineHeight: 21 },
  heading: { color: "#F5F0E6", fontSize: 20, fontWeight: "bold", marginTop: 30, marginBottom: 15 },
  row: { backgroundColor: "#142C4B", padding: 17, borderRadius: 13, flexDirection: "row", alignItems: "center", marginBottom: 10 },
  rank: { color: "#D6B15E", fontSize: 20, fontWeight: "bold", width: 35 },
  info: { flex: 1 },
  name: { color: "#F5F0E6", fontWeight: "bold" },
  username: { color: "#AAB8C8", fontSize: 12, marginTop: 5 },
  xp: { color: "#D6B15E", fontWeight: "bold" }
});
