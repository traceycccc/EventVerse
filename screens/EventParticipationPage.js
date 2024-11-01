// import React, { useState } from 'react';
// import { View, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
// import colors from '../colors';
// import { useNavigation } from '@react-navigation/native';
// import InfoBlock from '../components/InfoBlock';
// import InfoSection from '../components/InfoSection';
// import BigButton from '../components/BigButton';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const EventParticipationPage = ({ route }) => {
//     const { title, clubName, location, date, time, participantDetails } = route.params;
//     const [name, setName] = useState(participantDetails.name);
//     const [programme, setProgramme] = useState(participantDetails.programme);
//     const [contacts, setContacts] = useState(participantDetails.contacts);
//     const navigation = useNavigation();

//     const handleRegister = () => {
//         Alert.alert(
//             'Confirm Registration',
//             'Are you sure you want to register for this event?',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'OK',
//                     onPress: () => {
//                         // Show success alert first
//                         Alert.alert('Success', 'Successfully registered for the event!', [
//                             {
//                                 text: 'OK',
//                                 onPress: () => {
//                                     // Navigate back to FeedExplorePage after success
//                                     navigation.navigate('Feed', {
//                                         registeredEventTitle: title,
//                                     });
//                                 },
//                             },
//                         ]);
//                     },
//                 },
//             ],
//         );
//     };


//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//                 <MaterialIcons name="arrow-back" size={24} color={colors.white} />
//             </TouchableOpacity>
//             <InfoBlock
//                 title={title}
//                 clubTag={clubName}
//                 infoElements={[
//                     { icon: 'location', text: location, colorState: 'black' },
//                     { icon: 'date', text: date, colorState: 'black' },
//                     { icon: 'time', text: time, colorState: 'black' },
//                 ]}
//             />
//             <InfoSection contentContainerStyle={styles.infoContainer}
//                 title="Participant Details"
//                 infoData={[
//                     { label: 'Name', value: name, onChangeText: setName, isDisabled: false },
//                     { label: 'Student ID', value: participantDetails.studentId, isDisabled: true },
//                     { label: 'Student Email', value: participantDetails.studentEmail, isDisabled: true },
//                     { label: 'Programme', value: programme, onChangeText: setProgramme, isDisabled: false },
//                     { label: 'Contacts', value: contacts, onChangeText: setContacts, isDisabled: false },
//                 ]}
//                 isEditMode={true}
//             />
//             <BigButton title="Register" onPress={handleRegister} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: colors.white,
//         paddingBottom: 100,
//         paddingTop: 0,
//         paddingHorizontal: 20,
//     },
//     infoContainer: {
//         marginTop: 0,
//     },
//     backButton: {
//         marginBottom: 10,
//     },
// });

// export default EventParticipationPage;


// EventParticipationPage.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';
import InfoBlock from '../components/InfoBlock';
import InfoSection from '../components/InfoSection';
import BigButton from '../components/BigButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EventParticipationPage = ({ route }) => {
    const { title, clubName, location, date, time, participantDetails, updatePostStatus } = route.params;
    const [name, setName] = useState(participantDetails.name);
    const [programme, setProgramme] = useState(participantDetails.programme);
    const [contacts, setContacts] = useState(participantDetails.contacts);
    const navigation = useNavigation();

    const handleRegister = () => {
        Alert.alert(
            'Confirm Registration',
            'Are you sure you want to register for this event?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        updatePostStatus();
                        // Navigate back to FeedScreen and update the button status
                        navigation.navigate('Events Feed', {
                            registeredEventTitle: title, // Pass the registered event title back to FeedScreen
                        });
                        Alert.alert('Success', 'Successfully registered for the event!');
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
                title={title}
                clubTag={clubName}
                infoElements={[
                    { icon: 'location', text: location, colorState: 'black' },
                    { icon: 'date', text: date, colorState: 'black' },
                    { icon: 'time', text: time, colorState: 'black' },
                    { icon: 'money', text: "No Fee Required", colorState: 'black' },
                ]}
            />
            <InfoSection contentContainerStyle={styles.infoContainer}
                title="Participant Details"
                infoData={[
                    { label: 'Name', value: name, onChangeText: setName, isDisabled: false },
                    { label: 'Student ID', value: participantDetails.studentId, isDisabled: true },
                    { label: 'Student Email', value: participantDetails.studentEmail, isDisabled: true },
                    { label: 'Programme', value: programme, onChangeText: setProgramme, isDisabled: false },
                    { label: 'Contacts', value: contacts, onChangeText: setContacts, isDisabled: false },
                ]}
                isEditMode={true}
            />
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
});

export default EventParticipationPage;
