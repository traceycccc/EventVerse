import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

function Login({ navigation }) {
    return (
        <View style={styles.Input}>
            <View style={styles.Text1}>
                <Text style={styles.Text}>Text</Text>
            </View>
            <View style={styles.InputField}>
                <View style={styles.Frame27}>
                    <Text style={styles.Text2}>text</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 311,
        height: 73,
        boxSizing: 'border-box',
    },
    Text1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginRight: 6,
        boxSizing: 'border-box',
    },
    Text: {
        color: 'rgba(0,128,128,1)',
        fontSize: '14px',
        lineHeight: '14px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '600',
    },
    InputField: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 50,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(168,205,183,1)',
        borderRadius: 8,
        boxSizing: 'border-box',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    Frame27: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingBottom: 3,
        boxSizing: 'border-box',
    },
    Text2: {
        color: 'rgba(168,205,183,1)',
        fontSize: '14px',
        lineHeight: '14px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '600',
    },
})
