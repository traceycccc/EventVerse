
//111
import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ClubProfile from '../components/ClubProfile';
import { useClub } from '../context/ClubContext';  // Import the useClub hook

const ClubAProfilePage = () => {
    const { clubAJoined, setClubAJoined } = useClub(); // Get and set the club membership state
    const navigation = useNavigation();

    const handleLeaveClub = () => {
        Alert.alert(
            'Leave Club',
            'Are you sure you want to leave the club?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        setClubAJoined(false);
                        navigation.navigate('Explore Clubs', { chosenIndex: 0 });
                    },
                },
            ],
        );
    };

    return (
        <ClubProfile
            wallpaperImage={require('../assets/A.png')}  // Replace with actual wallpaper image for Club A
            clubImage={require('../assets/A.png')}  // Replace with actual club image for Club A
            clubName="IEC"
            membersCount={50}
            aboutText="IEC is dedicated to providing opportunities for students to engage in a wide variety of activities that promote learning, community service, and personal development."
            isMember={clubAJoined}  // Set member status from state
            onLeavePress={handleLeaveClub}  // Pass the leave club handler
            links={[
                { icon: 'email', value: 'ieciicp@gmail.com' },
                { icon: 'instagram', value: 'IEC_iicp' },
                { icon: 'facebook', value: 'IEC_iicp' },
            ]}
            galleryImages={[
                require('../assets/1.png'),
                require('../assets/2.png'),
                require('../assets/4.png'),
            ]}
        />
    );
};

export default ClubAProfilePage;
