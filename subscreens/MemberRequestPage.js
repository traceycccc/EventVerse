// MemberRequestPage.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, TouchableOpacity, Text, handlePress } from 'react-native';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';
import InfoBlock from '../components/InfoBlock';
import InfoSection from '../components/InfoSection';
import BigButton from '../components/BigButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MemberRequestPage = ({ route }) => {
    const { memberDetails } = route.params;
    const [name, setName] = useState(memberDetails.name);
    const [programme, setProgramme] = useState(memberDetails.programme);
    const [contacts, setContacts] = useState(memberDetails.contacts);
    const navigation = useNavigation();

    const handleRegister = () => {
        Alert.alert(
            'Confirm Registration',
            'Are you sure you want to register for joining this club?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        // Navigate back to FeedScreen and update the button status
                        navigation.navigate('Explore Clubs', { chosenIndex: 1 });
                        Alert.alert('Success', 'Successfully registered for joining the club!');
                    },
                },
            ],
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <InfoBlock
                title="Membership Registration"
                clubTag="IT Club"
                infoElements={[
                    { icon: 'money', text: "RM 10", colorState: 'black' },
                    { icon: 'contact', text: "TnG  0123456789,  Lee Xi Yi", colorState: 'black' },
                    
                ]}
            />
            <InfoSection contentContainerStyle={styles.infoContainer}
                title="Participant Details"
                infoData={[
                    { label: 'Name', value: name, onChangeText: setName, isDisabled: false },
                    { label: 'Student ID', value: memberDetails.studentId, isDisabled: true },
                    { label: 'Student Email', value: memberDetails.studentEmail, isDisabled: true },
                    { label: 'Programme', value: programme, onChangeText: setProgramme, isDisabled: false },
                    { label: 'Contacts', value: contacts, onChangeText: setContacts, isDisabled: false },
                    
                ]}
                isEditMode={true}
            />
            <Text style={styles.title}>Upload Receipt</Text>
            <View style={styles.inputContainer}>
            
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Add Image File</Text>
                </TouchableOpacity>
            </View>
            <BigButton title="Register" onPress={handleRegister} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
        paddingBottom: 100,
        paddingTop: 0,
        paddingHorizontal: 20,
    },
    infoContainer: {
        marginTop: 0,
    },
    backButton: {
        marginBottom: 10,
    },
    inputContainer: {
        marginVertical: 10,
    },
    
    title: {
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.secondaryContainer,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: colors.secondaryText,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MemberRequestPage;