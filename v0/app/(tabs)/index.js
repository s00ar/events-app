import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import { EVENTS } from '@/constants/events';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const data = EVENTS.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar eventos..."
          value={query}
          onChangeText={setQuery}
          style={styles.search}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        ListHeaderComponent={
          <Text style={{ marginLeft: 16, marginBottom: 8, fontWeight: 'bold' }}>
            Eventos recientes
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#fff',
  },
});
