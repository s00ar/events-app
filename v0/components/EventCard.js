import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useFavorites } from '@/context/FavoritesContext';
import { useRouter } from 'expo-router';

export default function EventCard({ event }) {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();
  const isFavorite = favorites.includes(event.id);

  return (
    <Pressable onPress={() => router.push(`/course/${event.id}`)} style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.time}>{event.time}</Text>
        <Text style={styles.room}>{event.room}</Text>
      </View>
      <Pressable
        onPress={() => toggleFavorite(event.id)}
        style={({ pressed }) => [styles.star, pressed && { opacity: 0.5 }]}
      >
        <AntDesign
          name={isFavorite ? 'star' : 'staro'}
          size={24}
          color={isFavorite ? Colors.light.secondary : Colors.light.icon}
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  info: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
  room: {
    fontSize: 12,
    color: '#777',
  },
  star: {
    padding: 4,
  },
});
