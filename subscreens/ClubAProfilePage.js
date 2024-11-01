// import React from 'react';
// import { StyleSheet } from 'react-native';
// import ClubProfile from '../components/ClubProfile';
// import colors from '../colors';

// const ClubAProfilePage = () => {
//     return (
//         <ClubProfile
//             wallpaperImage={require('../assets/it_club.png')}
//             clubImage={require('../assets/it_club.png')}
//             clubName="Club A"
//             membersCount={50}
//             aboutText="The IT Club is a community of students passionate about technology, coding, cybersecurity, software development, and all things IT. We aim to provide learning resources, organize events, and help members grow their technical skills."
//             isMember={true}
//             onJoinPress={() => alert('Press OK to confirm leaving the club')}
//             links={[
//                 { icon: 'email', value: 'cluba@gmail.com' },
//                 { icon: 'instagram', value: 'club_a' },
//                 { icon: 'facebook', value: 'the_club_a' },
//             ]}
//             galleryImages={[
//                 require('../assets/it_club.png'),
//                 require('../assets/it_club.png'),
//                 require('../assets/it_club.png'),
//                 require('../assets/it_club.png'),
//             ]}
//         />
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
// });

// export default ClubAProfilePage;


// import React, { useState } from 'react';
// import { StyleSheet, Alert } from 'react-native';
// import ClubProfile from '../components/ClubProfile';
// import colors from '../colors';

// const ClubAProfilePage = () => {
//     const [joinState, setJoinState] = useState('Leave Club'); // Initially a member

//     const handleLeavePress = () => {
//         Alert.alert(
//             'Leave Club',
//             'Press OK to confirm leaving the club',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'OK',
//                     onPress: () => {
//                         setJoinState('Join Club');
//                     },
//                 },
//             ],
//             { cancelable: false }
//         );
//     };

//     return (
//         <ClubProfile
//             wallpaperImage={require('../assets/it_club.png')}
//             clubImage={require('../assets/it_club.png')}
//             clubName="Club A"
//             membersCount={50}
//             aboutText="The IT Club is a community of students passionate about technology, coding, cybersecurity, software development, and all things IT. We aim to provide learning resources, organize events, and help members grow their technical skills."
//             joinState={joinState}
//             onJoinPress={() => {
//                 Alert.alert('Join Club', 'You have successfully joined the club!');
//                 setJoinState('Leave Club');
//             }}
//             onLeavePress={handleLeavePress}
//             links={[
//                 { icon: 'email', value: 'cluba@gmail.com' },
//                 { icon: 'instagram', value: 'club_a' },
//                 { icon: 'facebook', value: 'the_club_a' },
//             ]}
//             galleryImages={[
//                 require('../assets/it_club.png'),
//                 require('../assets/it_club.png'),
//                 require('../assets/it_club.png'),
//                 require('../assets/it_club.png'),
//             ]}
//         />
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
// });

// export default ClubAProfilePage;



// // ClubAProfilePage.js
// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import ClubProfile from '../components/ClubProfile';
// import { useNavigation } from '@react-navigation/native';

// const ClubAProfilePage = () => {
//     const [isMember, setIsMember] = useState(true); // Initially, the user is a member
//     const navigation = useNavigation();

//     const handleLeavePress = () => {
//         Alert.alert(
//             'Leave Club',
//             'Are you sure you want to leave the club?',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'OK',
//                     onPress: () => {
//                         setIsMember(false); // User is no longer a member
//                         navigation.navigate('Explore Clubs', { chosenIndex: 0 }); // Redirect to Explore Clubs
//                     },
//                 },
//             ]
//         );
//     };

//     return (
//         <ClubProfile
//             wallpaperImage={require('../assets/club.png')}
//             clubImage={require('../assets/club.png')}
//             clubName="Club A"
//             membersCount={30}
//             aboutText="Club A is a great place for students to learn about teamwork and engage in interesting activities."
//             isMember={isMember}
//             onJoinPress={() => setIsMember(true)}
//             onLeavePress={handleLeavePress}
//             joinState={isMember ? 'Leave Club' : 'Join Club'}
//             links={[
//                 { icon: 'email', value: 'cluba@gmail.com' },
//                 { icon: 'instagram', value: 'club_a' },
//                 { icon: 'facebook', value: 'Club_A_Official' },
//             ]}
//             galleryImages={[
//                 require('../assets/club.png'),
//                 require('../assets/club.png'),
//                 require('../assets/club.png'),
//             ]}
//         />
//     );
// };

// export default ClubAProfilePage;



// // ClubAProfilePage.js
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
// import colors from '../colors';
// import SmallButton from '../components/SmallButton';
// import { useNavigation } from '@react-navigation/native';


// const ClubAProfilePage = () => {
//     const [isMember, setIsMember] = useState(true); // Assume user is a member initially
//     const navigation = useNavigation();

//     const handleLeaveClub = () => {
//         Alert.alert(
//             'Leave Club',
//             'Are you sure you want to leave the club?',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'OK',
//                     onPress: () => {
//                         setIsMember(false);
//                         navigation.navigate('Explore Clubs', { chosenIndex: 0 });
//                     },
//                 },
//             ],
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <View style={styles.profileHeader}>
//                 <Text style={styles.clubName}>Club A</Text>
//                 <Text style={styles.membersCount}>50 members</Text>
//             </View>
//             <View style={styles.aboutSection}>
//                 <Text style={styles.sectionTitle}>About</Text>
//                 <Text style={styles.aboutText}>
//                     Club A is dedicated to providing opportunities for students to engage in a wide variety of activities
//                     that promote learning, community service, and personal development.
//                 </Text>
//             </View>
//             <View style={styles.buttonContainer}>
//                 <SmallButton
//                     title={isMember ? 'Leave Club' : 'Join Club'}
//                     onPress={isMember ? handleLeaveClub : () => navigation.navigate('Explore Clubs')}
//                     disabled={false}
//                 />
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: colors.white,
//         padding: 20,
//     },
//     profileHeader: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     clubName: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: colors.blackText,
//     },
//     membersCount: {
//         fontSize: 16,
//         color: colors.iconGrey,
//     },
//     aboutSection: {
//         marginBottom: 20,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.blackText,
//         marginBottom: 10,
//     },
//     aboutText: {
//         fontSize: 16,
//         color: colors.blackText,
//     },
//     buttonContainer: {
//         alignItems: 'center',
//     },
// });

// export default ClubAProfilePage;



// // ClubAProfilePage.js
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
// import colors from '../colors';
// import SmallButton from '../components/SmallButton';
// import { useNavigation } from '@react-navigation/native';
// import { useClub } from '../context/ClubContext';  // Import the useClub hook


// const ClubAProfilePage = () => {
//     const { clubAJoined, setClubAJoined } = useClub(); // Get and set the club membership state
//     const navigation = useNavigation();
    

//     const handleLeaveClub = () => {
//         Alert.alert(
//             'Leave Club',
//             'Are you sure you want to leave the club?',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'OK',
//                     onPress: () => {
//                         setClubAJoined(false); 
//                         navigation.navigate('Explore Clubs', { chosenIndex: 0 });
//                     },
//                 },
//             ],
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <View style={styles.profileHeader}>
//                 <Text style={styles.clubName}>Club A</Text>
//                 <Text style={styles.membersCount}>50 members</Text>
//             </View>
//             <View style={styles.aboutSection}>
//                 <Text style={styles.sectionTitle}>About</Text>
//                 <Text style={styles.aboutText}>
//                     Club A is dedicated to providing opportunities for students to engage in a wide variety of activities
//                     that promote learning, community service, and personal development.
//                 </Text>
//             </View>
//             <View style={styles.buttonContainer}>
//                 <SmallButton
//                     title={clubAJoined ? 'Leave Club' : 'Join Club'}
//                     onPress={clubAJoined ? handleLeaveClub : () => navigation.navigate('Explore Clubs')}
//                     disabled={false}
//                 />
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: colors.white,
//         padding: 20,
//     },
//     profileHeader: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     clubName: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: colors.blackText,
//     },
//     membersCount: {
//         fontSize: 16,
//         color: colors.iconGrey,
//     },
//     aboutSection: {
//         marginBottom: 20,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.blackText,
//         marginBottom: 10,
//     },
//     aboutText: {
//         fontSize: 16,
//         color: colors.blackText,
//     },
//     buttonContainer: {
//         alignItems: 'center',
//     },
// });

// export default ClubAProfilePage;





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
