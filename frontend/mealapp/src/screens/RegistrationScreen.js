import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
const apiUrl = process.env.API_URL;

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');


  const handleRegister = async () => {
    try {
    // Handle registration logic here
    const response = await axios.post('http://localhost:8000/api/v1/users/', {
        username,
        password,
        passwordConfirmation,
        email,
    });
    console.log(response.data);
  } 
    catch (error) {
        console.error(error);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegistrationScreen;
