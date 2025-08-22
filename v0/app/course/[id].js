import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { EVENTS } from '@/constants/events';
import { Colors } from '@/constants/Colors';
import Header from '@/components/Header';

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  const event = EVENTS.find((e) => e.id === id);

  if (!event) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No encontrado</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.time}>{event.time}</Text>
        <Text style={styles.room}>{event.room}</Text>
        <Text style={styles.desc}>{event.description}</Text>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Inscribirse</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.secondary]} onPress={() => {}}>
          <Text style={styles.buttonText}>Recordatorio</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  time: {
    fontSize: 16,
    marginBottom: 4,
  },
  room: {
    fontSize: 16,
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    marginBottom: 24,
  },
  button: {
    backgroundColor: Colors.light.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondary: {
    backgroundColor: Colors.light.secondary,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
