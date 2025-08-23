import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import { EVENTS } from '@/constants/events';
import { useFavorites } from '@/context/FavoritesContext';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const data = EVENTS.filter((e) => favorites.includes(e.id));

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {data.length === 0 ? (
        <Text style={{ margin: 16 }}>No hay favoritos.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard event={item} />}
        />
      )}
    </View>
  );
}
