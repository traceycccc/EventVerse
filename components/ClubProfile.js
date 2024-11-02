

//111
// ClubProfile.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Modal } from 'react-native';
import SmallButton from './SmallButton';
import InfoElement from './InfoElement';
import colors from '../colors';

const { width } = Dimensions.get('window');
const imageSize = (width - 60) / 3;

const ClubProfile = ({ wallpaperImage, clubImage, clubName, membersCount, aboutText, onJoinPress, isMember, onLeavePress, links, galleryImages }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [buttonState, setButtonState] = useState(isMember ? 'Leave Club' : 'Join Club');

    const handleButtonPress = () => {
        if (isMember) {
            onLeavePress();  // Call the leave club handler
            setButtonState('Join Club');  // Update button text when user leaves the club
        } 
        if (buttonState === 'Join Club') {
            onJoinPress();
            setButtonState('Join Requested');
        }
    };

    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Wallpaper Image */}
            <Image source={wallpaperImage} style={styles.wallpaper} />

            {/* Club Image, Name, Members, Join Button */}
            <View style={styles.profileContainer}>
                <Image source={clubImage} style={styles.clubImage} />
                <Text style={styles.clubName}>{clubName}</Text>
                <Text style={styles.membersCount}>{membersCount} members</Text>
                <Text style={styles.membersCount}>Membership Fee: RM 10</Text>
                <SmallButton
                    title={buttonState}
                    onPress={handleButtonPress}
                    disabled={buttonState === 'Join Requested'}
                />
            </View>

            {/* About Section */}
            <View style={styles.aboutSection}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.aboutText}>{aboutText}</Text>
            </View>

            {/* Links Section */}
            <View style={styles.linksSection}>
                <Text style={styles.sectionTitle}>Links</Text>
                {links.map((link, index) => (
                    <InfoElement key={index} icon={link.icon} text={link.value} colorState='black' />
                ))}
            </View>

            {/* Gallery Section */}
            <View style={styles.gallerySection}>
                <Text style={styles.sectionTitle}>Gallery</Text>
                <View style={styles.galleryImagesContainer}>
                    {galleryImages.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => openImageModal(image)}>
                            <Image source={image} style={[styles.galleryImage, { width: imageSize, height: imageSize }]} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Modal for Viewing Image */}
            <Modal visible={isModalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    <Image source={selectedImage} style={styles.fullImage} />
                </View>
            </Modal>
        </ScrollView>
    );
};

ClubProfile.defaultProps = {
    links: [],
    galleryImages: [],
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingBottom: 20,
    },
    wallpaper: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -50,
        paddingHorizontal: 20,
    },
    clubImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.white,
    },
    clubName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.blackText,
        marginTop: 10,
    },
    membersCount: {
        fontSize: 16,
        color: colors.iconGrey,
        marginBottom: 10,
    },
    aboutSection: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
        marginBottom: 10,
    },
    aboutText: {
        fontSize: 16,
        color: colors.blackText,
    },
    linksSection: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    gallerySection: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    galleryImagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    galleryImage: {
        borderRadius: 10,
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '90%',
        height: '70%',
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        right: 20,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: colors.blackText,
        fontWeight: 'bold',
    },
});

export default ClubProfile;



