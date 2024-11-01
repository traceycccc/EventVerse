



// // FilterModal.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import colors from '../colors';

// const FilterModal = ({ onApplyFilters, onClose }) => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Filter</Text>
//             {/* Filter Options (placeholders for now) */}
//             <Text style={styles.sectionTitle}>General</Text>
//             <Text style={styles.option}>Saved Posts</Text>
//             <Text style={styles.option}>Liked Posts</Text>

//             <Text style={styles.sectionTitle}>Clubs</Text>
//             <Text style={styles.option}>IT Club</Text>
//             <Text style={styles.option}>Club A</Text>
//             <Text style={styles.option}>Club B</Text>

//             <Text style={styles.sectionTitle}>Post Type</Text>
//             <Text style={styles.option}>Seminar</Text>
//             <Text style={styles.option}>Workshop</Text>

//             {/* Reset and Apply Filters Buttons */}
//             <View style={styles.buttonRow}>
//                 <TouchableOpacity style={styles.applyButton} onPress={onApplyFilters}>
//                     <Text style={styles.buttonText}>Apply Filters</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Close button to dismiss the modal */}
//             <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//                 <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.white,
//         padding: 20,
//         borderRadius: 10,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 15,
//     },
//     sectionTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     option: {
//         fontSize: 14,
//         marginVertical: 5,
//     },
//     buttonRow: {
//         marginTop: 20,
//     },
//     applyButton: {
//         backgroundColor: colors.primaryBlue,
//         padding: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
//     closeButton: {
//         marginTop: 10,
//         padding: 10,
//         alignItems: 'center',
//     },
// });

// export default FilterModal;




// // FilterModal.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
// import colors from '../colors';
// import SmallButton from './SmallButton';

// const FilterModal = ({ onApplyFilters, onClose }) => {
//     // State for tickboxes
//     const [savedPosts, setSavedPosts] = useState(false);
//     const [likedPosts, setLikedPosts] = useState(false);
//     const [selectedClubs, setSelectedClubs] = useState({
//         'IT Club': false,
//         'Club A': false,
//         'Club B': false,
//         'Club C': false,
//         'Club D': false,
//     });
//     const [selectedPostTypes, setSelectedPostTypes] = useState({
//         Seminar: false,
//         Workshop: false,
//         Activity: false,
//         Competition: false,
//         General: false,
//     });

//     // Function to toggle checkboxes
//     const toggleCheckbox = (setState, currentState) => setState(!currentState);

//     return (
//         <View style={styles.container}>
//             <View style={styles.titleBar}>
//                 <Text style={styles.title}>Filter</Text>
//                 <SmallButton title="Close" type="secondary" onPress={onClose} />
                

//             </View>

//             {/* General Section */}
//             <Text style={styles.sectionTitle}>General</Text>
//             <View style={styles.checkboxRow}>
//                 <TouchableOpacity onPress={() => toggleCheckbox(setSavedPosts, savedPosts)}>
//                     <View style={[styles.checkbox, savedPosts ? styles.checked : null]} />
//                 </TouchableOpacity>
//                 <Text>Saved Posts</Text>
//             </View>
//             <View style={styles.checkboxRow}>
//                 <TouchableOpacity onPress={() => toggleCheckbox(setLikedPosts, likedPosts)}>
//                     <View style={[styles.checkbox, likedPosts ? styles.checked : null]} />
//                 </TouchableOpacity>
//                 <Text>Liked Posts</Text>
//             </View>

//             {/* Clubs Section */}
//             <Text style={styles.sectionTitle}>Clubs</Text>
//             {Object.keys(selectedClubs).map((club) => (
//                 <View key={club} style={styles.checkboxRow}>
//                     <TouchableOpacity
//                         onPress={() =>
//                             setSelectedClubs({ ...selectedClubs, [club]: !selectedClubs[club] })
//                         }
//                     >
//                         <View
//                             style={[
//                                 styles.checkbox,
//                                 selectedClubs[club] ? styles.checked : null,
//                             ]}
//                         />
//                     </TouchableOpacity>
//                     <Text>{club}</Text>
//                 </View>
//             ))}

//             {/* Post Type Section */}
//             <Text style={styles.sectionTitle}>Post Type</Text>
//             {Object.keys(selectedPostTypes).map((type) => (
//                 <View key={type} style={styles.checkboxRow}>
//                     <TouchableOpacity
//                         onPress={() =>
//                             setSelectedPostTypes({
//                                 ...selectedPostTypes,
//                                 [type]: !selectedPostTypes[type],
//                             })
//                         }
//                     >
//                         <View
//                             style={[
//                                 styles.checkbox,
//                                 selectedPostTypes[type] ? styles.checked : null,
//                             ]}
//                         />
//                     </TouchableOpacity>
//                     <Text>{type}</Text>
//                 </View>
//             ))}

//             {/* Reset and Apply Filters Buttons */}
//             <View style={styles.buttonRow}>
               
//                 <SmallButton title="Reset" type="secondary" onPress={() => console.log('Secondary Button Pressed')} />
//                 <SmallButton title="Apply Filters" type="primary" onPress={onApplyFilters} />
               
//             </View>

//             {/* Close button to dismiss the modal */}
//             <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//                 <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.white,
//         padding: 20,
//         borderTopLeftRadius: 16,
//         borderBottomLeftRadius: 16,
//         width: '76%', // Adjust width to give it a right-aligned panel look
//         position: 'absolute',
//         right: 0, // Align to the right side of the screen
//         top: 0,
//         bottom: 0,
        
//     },
//     titleBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         paddingVertical: 12,
        

//         color: colors.blackText,

//     },
//     sectionTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginVertical: 10,
//         marginTop: 26,
//         color: colors.blackText,
//     },
//     checkboxRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 8,
//     },
//     checkbox: {
//         width: 20,
//         height: 20,
//         borderRadius: 4,
//         borderWidth: 2,
//         borderColor: colors.labelIcon,
//         marginRight: 10,
//     },
//     checked: {
//         backgroundColor: colors.primaryBlue, // Change to the checked color
//         borderColor: colors.primaryBlue,
//     },
//     buttonRow: {
//         marginTop: 90,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     closeButton: {
//         marginTop: 10,
//         alignItems: 'center',
//     },
// });

// export default FilterModal;




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



