
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InfoSection from '../components/InfoSection';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
    const [name, setName] = React.useState('Chow Ching');
    const [programme, setProgramme] = React.useState('BCTCUN');
    const [contact, setContact] = React.useState('0111234567');

    const navigation = useNavigation();

    const infoData = [
        {
            icon: 'name',
            value: name,
            colorState: 'black',
        },
        {
            icon: 'studentId',
            value: 'P19011279',
            colorState: 'black',
        },
        {
            icon: 'course',
            value: programme,
            colorState: 'black',
        },
    ];

    const contactData = [
        {
            icon: 'email',
            value: 'p19011279@student.newinti.edu.my',
            colorState: 'black',
        },
        {
            icon: 'contact',
            value: contact,
            colorState: 'black',
        },
    ];

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {
                    name, programme, contact, setName, setProgramme, setContact
                })}>
                    <MaterialIcons name="edit" size={24} color={colors.white} style={{ marginRight: 15 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation, name, programme, contact]);

    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                <Image
                    source={require('../assets/profile_pic.png')}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.cameraIcon}>
                    <MaterialIcons name="camera-alt" size={28} color={colors.primaryBlue} />
                </TouchableOpacity>
            </View>
            <InfoSection title="Basic Details" infoData={infoData} isEditMode={false} />
            <InfoSection title="Contact Details" infoData={contactData} isEditMode={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative', // Ensure that child elements like cameraIcon are positioned relative to this container
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: -3,
        right: 120,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 5,
        elevation: 3, // Adds some shadow to make it stand out
    },
});

export default UserProfile;


