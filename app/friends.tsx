
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function FriendsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.brand}>MedDecode Academia</Text>
      <Text style={styles.title}>Study Together</Text>
      <Text style={styles.subtitle}>
        Progress is better when shared.
      </Text>

      <View style={styles.searchCard}>
        <Text style={styles.heading}>Find a Student</Text>
        <TextInput
          placeholder="Enter username..."
          placeholderTextColor="#8998AA"
          style={styles.input}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Friend Requests</Text>
      <View style={styles.emptyCard}>
        <Text style={styles.emptyTitle}>No requests yet</Text>
        <Text style={styles.emptyText}>
          Your incoming friend requests will appear here.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Your Friends</Text>
      <View style={styles.emptyCard}>
        <Text style={styles.emptyTitle}>Your study circle starts here</Text>
        <Text style={styles.emptyText}>
          Add students and keep each other motivated.
        </Text>
      </View>

      <View style={styles.note}>
        <Text style={styles.noteText}>
          Connect. Study. Grow.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1F3A",
    padding: 22
  },
  brand: {
    color: "#D6B15E",
    fontSize: 15,
    marginTop: 35
  },
  title: {
    color: "#F5F0E6",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 22
  },
  subtitle: {
    color: "#AAB8C8",
    marginTop: 8
  },
  searchCard: {
    backgroundColor: "#142C4B",
    padding: 20,
    borderRadius: 18,
    marginTop: 28
  },
  heading: {
    color: "#F5F0E6",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15
  },
  input: {
    backgroundColor: "#0B1F3A",
    color: "#F5F0E6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 14
  },
  button: {
    backgroundColor: "#D6B15E",
    padding: 14,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#0B1F3A",
    fontWeight: "bold"
  },
  sectionTitle: {
    color: "#F5F0E6",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 14
  },
  emptyCard: {
    backgroundColor: "#142C4B",
    padding: 22,
    borderRadius: 14,
    marginBottom: 10
  },
  emptyTitle: {
    color: "#F5F0E6",
    fontSize: 16,
    fontWeight: "bold"
  },
  emptyText: {
    color: "#AAB8C8",
    marginTop: 8,
    lineHeight: 21
  },
  note: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 35
  },
  noteText: {
    color: "#D6B15E",
    letterSpacing: 2
  }
});
