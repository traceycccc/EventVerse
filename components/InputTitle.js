import React from 'react';
import { Text, StyleSheet } from 'react-native';

const InputTitle = ({ title }) => {
    return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default InputTitle;
