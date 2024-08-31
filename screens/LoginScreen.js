import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import InputTitle from '../components/InputTitle';
import InputText from '../components/InputText';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // For now, just navigate to the Home screen
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <InputTitle title="Email" />
            <InputText
                placeholder="Enter your email"
                onChangeText={setEmail}
                value={email}
            />
            <InputTitle title="Password" />
            <InputText
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
});

export default LoginScreen;
