
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

const subjects = ["Anatomy", "Physiology", "Pathology", "Pharmacology"];

export default function HomeScreen() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [subject, setSubject] = useState("Anatomy");

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return [h, m, sec].map(v => String(v).padStart(2, "0")).join(":");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.brand}>MedDecode</Text>
      <Text style={styles.title}>ACADEMIA</Text>
      <Text style={styles.subtitle}>One Hour Today. A Better Tomorrow.</Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.number}>0</Text>
          <Text style={styles.label}>DAY STREAK</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.number}>0</Text>
          <Text style={styles.label}>TOTAL XP</Text>
        </View>
      </View>

      <Text style={styles.section}>Choose your subject</Text>
      <View style={styles.subjects}>
        {subjects.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => setSubject(item)}
            style={[styles.subject, subject === item && styles.selected]}
          >
            <Text style={styles.subjectText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.timerCard}>
        <Text style={styles.label}>CURRENT STUDY SESSION</Text>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
        <Text style={styles.selectedSubject}>{subject}</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => setRunning(!running)}
        >
          <Text style={styles.buttonText}>
            {running ? "PAUSE SESSION" : "START STUDYING"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setRunning(false);
          setSeconds(0);
        }}>
          <Text style={styles.reset}>RESET TIMER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1F3A",
    padding: 24,
    justifyContent: "center"
  },
  brand: {
    color: "#F5F0E6",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center"
  },
  title: {
    color: "#D6B15E",
    fontSize: 20,
    letterSpacing: 6,
    textAlign: "center",
    marginTop: 4
  },
  subtitle: {
    color: "#C5C9D1",
    textAlign: "center",
    marginTop: 12
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 35
  },
  stat: {
    backgroundColor: "#142C4B",
    padding: 22,
    borderRadius: 16,
    alignItems: "center",
    minWidth: 125
  },
  number: {
    color: "#D6B15E",
    fontSize: 30,
    fontWeight: "bold"
  },
  label: {
    color: "#C5C9D1",
    fontSize: 11,
    marginTop: 8,
    letterSpacing: 1
  },
  section: {
    color: "#F5F0E6",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14
  },
  subjects: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 25
  },
  subject: {
    backgroundColor: "#142C4B",
    padding: 12,
    borderRadius: 10
  },
  selected: {
    borderWidth: 1,
    borderColor: "#D6B15E"
  },
  subjectText: {
    color: "#F5F0E6",
    fontSize: 12
  },
  timerCard: {
    backgroundColor: "#142C4B",
    padding: 25,
    borderRadius: 20,
    alignItems: "center"
  },
  timer: {
    color: "#F5F0E6",
    fontSize: 42,
    fontWeight: "bold",
    marginVertical: 15
  },
  selectedSubject: {
    color: "#D6B15E",
    marginBottom: 20
  },
  startButton: {
    backgroundColor: "#D6B15E",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center"
  },
  buttonText: {
    color: "#0B1F3A",
    fontWeight: "bold"
  },
  reset: {
    color: "#C5C9D1",
    marginTop: 18
  }
});
