import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
const apiUrl = process.env.API_URL;

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/v1/token/login/`, {
        username,
        password,
      });
      const token = response.data.token;
      // Store the token in state or AsyncStorage
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput value={username} onChangeText={setUsername} placeholder="Username" />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Registration')} />
    </View>
  );
};

export default LoginScreen;
