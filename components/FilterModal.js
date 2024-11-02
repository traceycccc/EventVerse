


// FilterModal.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';
import SmallButton from './SmallButton';
import CheckBox from './CheckBox';  // Import CheckBox component

const FilterModal = ({ onApplyFilters, onClose }) => {
    // State for tickboxes
    const [savedPosts, setSavedPosts] = useState(false);
    const [likedPosts, setLikedPosts] = useState(false);
    const [selectedClubs, setSelectedClubs] = useState({
        'IT Club': false,
        'IEC': false,
        'Nerf Club': false,
        'Chess Club': false,
        'Anime Club': false,
    });
    const [selectedPostTypes, setSelectedPostTypes] = useState({
        Seminar: false,
        Workshop: false,
        Activity: false,
        Competition: false,
        General: false,
    });

    // Function to reset all checkboxes to their default state (false)
    const resetFilters = () => {
        setSavedPosts(false);
        setLikedPosts(false);
        setSelectedClubs({
            'IT Club': false,
            'IEC': false,
            'Nerf Club': false,
            'Chess Club': false,
            'Anime Club': false,
        });
        setSelectedPostTypes({
            Seminar: false,
            Workshop: false,
            Activity: false,
            Competition: false,
            General: false,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleBar}>
                <Text style={styles.title}>Filter</Text>
                <SmallButton title="Close" type="secondary" onPress={onClose} />
            </View>

            {/* General Section */}
            <Text style={styles.sectionTitle}>General</Text>
            <View style={styles.checkboxRow}>
                <CheckBox isChecked={savedPosts} onPress={() => setSavedPosts(!savedPosts)} />
                <Text>Saved Posts</Text>
            </View>
            <View style={styles.checkboxRow}>
                <CheckBox isChecked={likedPosts} onPress={() => setLikedPosts(!likedPosts)} />
                <Text>Liked Posts</Text>
            </View>

            {/* Clubs Section */}
            <Text style={styles.sectionTitle}>Clubs</Text>
            {Object.keys(selectedClubs).map((club) => (
                <View key={club} style={styles.checkboxRow}>
                    <CheckBox
                        isChecked={selectedClubs[club]}
                        onPress={() => setSelectedClubs({ ...selectedClubs, [club]: !selectedClubs[club] })}
                    />
                    <Text>{club}</Text>
                </View>
            ))}

            {/* Post Type Section */}
            <Text style={styles.sectionTitle}>Post Type</Text>
            {Object.keys(selectedPostTypes).map((type) => (
                <View key={type} style={styles.checkboxRow}>
                    <CheckBox
                        isChecked={selectedPostTypes[type]}
                        onPress={() => setSelectedPostTypes({ ...selectedPostTypes, [type]: !selectedPostTypes[type] })}
                    />
                    <Text>{type}</Text>
                </View>
            ))}

            {/* Reset and Apply Filters Buttons */}
            <View style={styles.buttonRow}>
                <SmallButton title="Reset" type="secondary" onPress={resetFilters} />
                <SmallButton title="Apply Filters" type="primary" onPress={onApplyFilters} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 20,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        width: '76%',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 12,
        color: colors.blackText,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        marginTop: 26,
        color: colors.blackText,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonRow: {
        marginTop: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeButton: {
        marginTop: 10,
        alignItems: 'center',
    },
});

export default FilterModal;



