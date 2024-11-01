



// ITProfilePage.js
import React from 'react';
import { StyleSheet } from 'react-native';
import ClubProfile from '../components/ClubProfile';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';

const ITProfilePage = () => {
    const navigation = useNavigation();

    const handleJoinPress = () => {
        navigation.navigate('MemberRequestPage', {
            memberDetails: {
                name: 'Chow Ching Huey', // Replace with actual data if available
                studentId: 'P19011279', // Example student ID
                studentEmail: 'p19011279@student.newinti.edu.my',
                programme: 'BCTCUN',
                contacts: '0111234567',
            },
        });
    };

    return (
        <ClubProfile
            wallpaperImage={require('../assets/IT.png')}
            clubImage={require('../assets/IT.png')}
            clubName="IT Club"
            membersCount={50}
            aboutText="The IT Club is a community of students passionate about technology, coding, cybersecurity, software development, and all things IT. We aim to provide learning resources, organize events, and help members grow their technical skills."
            isMember={false}
            onJoinPress={handleJoinPress} // Pass the join handler function
            links={[
                { icon: 'email', value: 'itclub@gmail.com' },
                { icon: 'instagram', value: 'it_club' },
                { icon: 'facebook', value: 'IT_club' },
            ]}
            galleryImages={[
                require('../assets/1.png'),
                require('../assets/2.png'),
                require('../assets/3.png'),
                require('../assets/4.png'),
            ]}
        />
    );
};



export default ITProfilePage;
