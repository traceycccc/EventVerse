import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({ placeholder, secureTextEntry, onChangeText, value }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
});

export default InputText;
