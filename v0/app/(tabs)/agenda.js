import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import { EVENTS } from '@/constants/events';

const sections = [
  { title: 'Hoy', data: EVENTS },
];

export default function AgendaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
  },
});
