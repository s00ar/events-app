import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Alert } from 'react-native';
import Header from '@/components/Header';
import { Colors } from '@/constants/Colors';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Código de confirmación"
          style={styles.input}
          value={code}
          onChangeText={setCode}
        />
        <Pressable
          style={styles.button}
          onPress={async () => {
            try {
              await signInWithEmailAndPassword(auth, email, code);
              Alert.alert('Éxito', 'Sesión iniciada');
            } catch (e) {
              Alert.alert('Error', e.message);
            }
          }}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: Colors.light.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
