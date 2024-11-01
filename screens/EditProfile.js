


// import React, { useState } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import InfoSection from '../components/InfoSection';
// import BigButton from '../components/BigButton';
// import colors from '../colors';

// const EditProfile = ({ route, navigation }) => {
//     const { name: initialName, programme: initialProgramme, contact: initialContact, setName, setProgramme, setContact } = route.params;

//     const [name, setNameLocal] = useState(initialName);
//     const [programme, setProgrammeLocal] = useState(initialProgramme);
//     const [contact, setContactLocal] = useState(initialContact);

//     const basicInfoData = [
//         {
//             label: 'Name',
//             value: name,
//             onChangeText: setNameLocal,
//             isDisabled: false,
//         },
//         {
//             label: 'Student ID',
//             value: 'P19011279',
//             isDisabled: true,
//         },
//         {
//             label: 'Programme',
//             value: programme,
//             onChangeText: setProgrammeLocal,
//             isDisabled: false,
//         },
//     ];

//     const contactInfoData = [
//         {
//             label: 'Student Email',
//             value: 'p19011279@student.newinti.edu.my',
//             isDisabled: true,
//         },
//         {
//             label: 'Contacts',
//             value: contact,
//             onChangeText: setContactLocal,
//             isDisabled: false,
//         },
//     ];

//     const handleSaveChanges = () => {
//         // Update UserProfile details
//         setName(name);
//         setProgramme(programme);
//         setContact(contact);
//         navigation.goBack();
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.content}>
//                 <View style={styles.note}>
//                     <Text style={styles.text}>Note!
//                     </Text>
//                     <Text style={styles.text1}>
//                         Your details will be used to autofill forms
//                     </Text>
//                 </View>
                
//                 <InfoSection title="Basic Details" infoData={basicInfoData} isEditMode={true} />
//                 <InfoSection title="Contact Details" infoData={contactInfoData} isEditMode={true} />
//             </View>
//             <BigButton title="Save Changes" onPress={handleSaveChanges} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     content: {
//         padding: 20,
//         paddingBottom: 120,
//     },
//     note:{
//         borderWidth: 1,
//         borderColor: colors.secondaryText,
//         backgroundColor: colors.secondaryContainer,
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         fontSize: 16,
//         color: colors.blackText,
//         marginVertical: 20,

//     },
//     text: {
//         color: colors.secondaryText,
//         fontWeight: 'bold',
//         fontSize: 20,

//     },
//     text1: {
//         color: colors.secondaryText,
//         fontWeight: 'bold',
//         fontSize: 16,

//     }
// });

// export default EditProfile;



import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import InfoSection from '../components/InfoSection';
import BigButton from '../components/BigButton';
import colors from '../colors';

const EditProfile = ({ route, navigation }) => {
    const { name: initialName, programme: initialProgramme, contact: initialContact, setName, setProgramme, setContact } = route.params;

    const [name, setNameLocal] = useState(initialName);
    const [programme, setProgrammeLocal] = useState(initialProgramme);
    const [contact, setContactLocal] = useState(initialContact);

    const basicInfoData = [
        {
            label: 'Name',
            value: name,
            onChangeText: setNameLocal,
            isDisabled: false,
        },
        {
            label: 'Student ID',
            value: 'P19011279',
            isDisabled: true,
        },
        {
            label: 'Programme',
            value: programme,
            onChangeText: setProgrammeLocal,
            isDisabled: false,
        },
    ];

    const contactInfoData = [
        {
            label: 'Student Email',
            value: 'p19011279@student.newinti.edu.my',
            isDisabled: true,
        },
        {
            label: 'Contacts',
            value: contact,
            onChangeText: setContactLocal,
            isDisabled: false,
        },
    ];

    const handleSaveChanges = () => {
        // Update UserProfile details
        setName(name);
        setProgramme(programme);
        setContact(contact);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.note}>
                    <Text style={styles.text}>Important Note!</Text>
                    <Text style={styles.text1}>
                        Your details will be used to autofill forms automatically.
                    </Text>
                </View>

                <InfoSection title="Basic Details" infoData={basicInfoData} isEditMode={true} />
                <InfoSection title="Contact Details" infoData={contactInfoData} isEditMode={true} />
            </ScrollView>
            <BigButton title="Save Changes" onPress={handleSaveChanges} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        padding: 20,
        paddingBottom: 120,
    },
    note: {
        borderWidth: 1,
        borderColor: colors.secondaryText,
        backgroundColor: colors.secondaryContainer,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 20,
    },
    text: {
        color: colors.secondaryText,
        fontWeight: 'bold',
        fontSize: 20,
    },
    text1: {
        color: colors.secondaryText,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
});

export default EditProfile;
