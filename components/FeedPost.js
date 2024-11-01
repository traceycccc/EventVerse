// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
// import ReactionElement from './ReactionElement';
// import SmallButton from './SmallButton';
// import Tag from './Tag'; // Import the Tag component
// import colors from '../colors';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// const FeedPost = ({ clubImage, clubName, postImage, title, content, postDate, showRegisterButton, registerButtonTitle, showTag, tagTitle, participantDetails }) => {

//     const [liked, setLiked] = useState(false);
//     const [saved, setSaved] = useState(false);
//     const [likesCount, setLikesCount] = useState(123);
//     const [commentsCount] = useState(45);
//     const [calendarCount] = useState(48);
//     const navigation = useNavigation(); // Use useNavigation hook

//     const toggleLike = () => {
//         setLiked(!liked);
//         setLikesCount(liked ? likesCount - 1 : likesCount + 1);
//     };

//     const toggleBookmark = () => {
//         setSaved(!saved);
//     };

//     const handleRegisterPress = () => {
//         // Navigate to the EventParticipationPage
//         navigation.navigate('EventParticipationPage', {
//             title,
//             clubName,
//             location: 'MPH, IICP', // You can adjust these values as needed
//             date: '6th Oct 2024',
//             time: '2:00 PM - 5:00 PM',
//             participantDetails: participantDetails,
//             updatePostStatus: () => console.log('Updating post status to registered'),
//         });
//     };

//     const renderReaction = (icon, count, isActive, onPress) => (
//         <View style={styles.reactionContainer}>
//             <ReactionElement
//                 icon={icon}
//                 count={count}
//                 isActive={isActive}
//                 onPress={onPress}
//                 iconSize={28}
//                 textSize={16}
//             />
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             {/* Club Info */}
//             <View style={styles.clubInfoContainer}>
//                 <Image source={clubImage} style={styles.clubImage} />
//                 <Text style={styles.clubName}>{clubName}</Text>

//                 <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
//                     <ReactionElement
//                         icon="bookmark"
//                         count={0}
//                         isActive={saved}
//                         onPress={toggleBookmark}
//                         iconSize={28}
//                     />
//                 </TouchableOpacity>
//             </View>

//             {/* Post Image */}
//             {postImage && <Image source={postImage} style={styles.postImage} />}

//             {/* Reactions and Register Button */}
//             <View style={styles.reactionsContainer}>
//                 <View style={styles.reactionsWrapper}>
//                     {renderReaction("heart", likesCount, liked, toggleLike)}
//                     {renderReaction("comment", commentsCount, false, () => console.log('Comment icon pressed'))}
//                     {renderReaction("calendar", calendarCount, false, () => console.log('Calendar icon pressed'))}
//                 </View>
//                 {showRegisterButton && (
//                     <SmallButton
//                         title={registerButtonTitle}
//                         type={registerButtonTitle === 'Registered' ? 'disabled' : 'secondary'}
//                         onPress={registerButtonTitle !== 'Registered' ? handleRegisterPress : null}
//                         disabled={registerButtonTitle === 'Registered'}
//                         style={styles.registerButton}
//                     />
//                 )}
//             </View>

//             {/* Tag Component */}
//             {showTag && (
//                 <View style={styles.tagContainer}>
//                     <Tag title={tagTitle} type="pending" fontSize={12} />
//                 </View>
//             )}

//             {/* Content */}
//             <View style={styles.contentContainer}>
//                 <Text style={styles.postTitle}>{title}</Text>
//                 <Text style={styles.content}>{content}</Text>
//                 <Text style={styles.date}>{postDate}</Text>
//             </View>
//         </View>
//     );
// };

// FeedPost.propTypes = {
//     clubImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
//     clubName: PropTypes.string.isRequired,
//     postImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     postDate: PropTypes.string.isRequired,
//     showRegisterButton: PropTypes.bool,
//     registerButtonTitle: PropTypes.string,
//     showTag: PropTypes.bool,
//     tagTitle: PropTypes.string,
//     participantDetails: PropTypes.object.isRequired,
// };

// FeedPost.defaultProps = {
//     showRegisterButton: false,
//     registerButtonTitle: 'Register',
//     showTag: false,
//     tagTitle: '',
//     participantDetails: {
//         name: 'Chow Ching Huey',
//         studentId: 'P19011279',
//         studentEmail: 'p19011279@student.newinti.edu.my',
//         programme: 'BCTCUN',
//         contacts: '0111234567',
//     },
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.white,
//         padding: 0,
//         marginBottom: 20,
//     },
//     clubInfoContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 0,
//         paddingHorizontal: 15,
//         paddingTop: 10,
//         paddingBottom: 10,
//     },
//     clubImage: {
//         width: 42,
//         height: 42,
//         borderRadius: 21,
//     },
//     clubName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.blackText,
//         marginLeft: 10,
//         flex: 1,
//     },
//     bookmarkButton: {
//         padding: 0,
//     },
//     postImage: {
//         width: '100%',
//         height: 360,
//         resizeMode: 'cover',
//     },
//     postTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: colors.blackText,
//     },
//     tagContainer: {
//         alignSelf: 'flex-start',
//         paddingHorizontal: 15,
//         marginBottom: 4,
//     },
//     reactionsContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 15,
//         paddingVertical: 0,
//     },
//     reactionsWrapper: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingTop: 12,
//         paddingBottom: 5,
//     },
//     reactionContainer: {
//         marginRight: 12,
//     },
//     contentContainer: {
//         paddingHorizontal: 15,
//         paddingBottom: 0,
//     },
//     content: {
//         fontSize: 16,
//         color: colors.blackText,
//         marginBottom: 5,
//     },
//     date: {
//         fontSize: 16,
//         color: colors.labelIcon,
//     },
//     registerButton: {
//         alignSelf: 'flex-start',
//         marginLeft: 15,
//     },
// });

// export default FeedPost;





// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
// import ReactionElement from './ReactionElement';
// import SmallButton from './SmallButton';
// import Tag from './Tag'; // Import the Tag component
// import colors from '../colors';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// const FeedPost = ({ clubImage, clubName, postImage, title, content, postDate, showRegisterButton, registerButtonTitle, showTag, tagTitle, participantDetails }) => {

//     const [liked, setLiked] = useState(false);
//     const [saved, setSaved] = useState(false);
//     const [likesCount, setLikesCount] = useState(123);
//     const [commentsCount] = useState(45);
//     const [calendarCount] = useState(48);
//     const navigation = useNavigation(); // Use useNavigation hook

//     const toggleLike = () => {
//         setLiked(!liked);
//         setLikesCount(liked ? likesCount - 1 : likesCount + 1);
//     };

//     const toggleBookmark = () => {
//         setSaved(!saved);
//     };

//     const handleRegisterPress = () => {
//         // Navigate to the EventParticipationPage
//         navigation.navigate('EventParticipationPage', {
//             title,
//             clubName,
//             location: 'MPH, IICP', // You can adjust these values as needed
//             date: '6th Oct 2024',
//             time: '2:00 PM - 5:00 PM',
//             participantDetails: participantDetails,
//             updatePostStatus: () => console.log('Updating post status to registered'),
//         });
//     };

//     const renderReaction = (icon, count, isActive, onPress) => (
//         <View style={styles.reactionContainer}>
//             <ReactionElement
//                 icon={icon}
//                 count={count}
//                 isActive={isActive}
//                 onPress={onPress}
//                 iconSize={28}
//                 textSize={16}
//             />
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             {/* Club Info */}
//             <View style={styles.clubInfoContainer}>
//                 <Image source={clubImage} style={styles.clubImage} />
//                 <Text style={styles.clubName}>{clubName}</Text>

//                 <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
//                     <ReactionElement
//                         icon="bookmark"
//                         count={0}
//                         isActive={saved}
//                         onPress={toggleBookmark}
//                         iconSize={28}
//                     />
//                 </TouchableOpacity>
//             </View>

//             {/* Post Image */}
//             {postImage && <Image source={postImage} style={styles.postImage} />}

//             {/* Reactions and Register Button */}
//             <View style={styles.reactionsContainer}>
//                 <View style={styles.reactionsWrapper}>
//                     {renderReaction("heart", likesCount, liked, toggleLike)}
//                     {renderReaction("comment", commentsCount, false, () => console.log('Comment icon pressed'))}
//                     {renderReaction("calendar", calendarCount, false, () => console.log('Calendar icon pressed'))}
//                 </View>
//                 {showRegisterButton && (
//                     <SmallButton
//                         title={registerButtonTitle}
//                         type={'secondary'}
//                         onPress={handleRegisterPress}
//                         style={styles.registerButton}
//                     />
//                 )}
//             </View>

//             {/* Tag Component */}
//             {showTag && (
//                 <View style={styles.tagContainer}>
//                     <Tag title={tagTitle} type="pending" fontSize={12} />
//                 </View>
//             )}

//             {/* Content */}
//             <View style={styles.contentContainer}>
//                 <Text style={styles.postTitle}>{title}</Text>
//                 <Text style={styles.content}>{content}</Text>
//                 <Text style={styles.date}>{postDate}</Text>
//             </View>
//         </View>
//     );
// };

// FeedPost.propTypes = {
//     clubImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
//     clubName: PropTypes.string.isRequired,
//     postImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     postDate: PropTypes.string.isRequired,
//     showRegisterButton: PropTypes.bool,
//     registerButtonTitle: PropTypes.string,
//     showTag: PropTypes.bool,
//     tagTitle: PropTypes.string,
//     participantDetails: PropTypes.object.isRequired,
// };

// FeedPost.defaultProps = {
//     showRegisterButton: false,
//     registerButtonTitle: 'Register',
//     showTag: false,
//     tagTitle: '',
//     participantDetails: {
//         name: 'Chow Ching Huey',
//         studentId: 'P19011279',
//         studentEmail: 'p19011279@student.newinti.edu.my',
//         programme: 'BCTCUN',
//         contacts: '0111234567',
//     },
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.white,
//         padding: 0,
//         marginBottom: 20,
//     },
//     clubInfoContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 0,
//         paddingHorizontal: 15,
//         paddingTop: 10,
//         paddingBottom: 10,
//     },
//     clubImage: {
//         width: 42,
//         height: 42,
//         borderRadius: 21,
//     },
//     clubName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.blackText,
//         marginLeft: 10,
//         flex: 1,
//     },
//     bookmarkButton: {
//         padding: 0,
//     },
//     postImage: {
//         width: '100%',
//         height: 360,
//         resizeMode: 'cover',
//     },
//     postTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: colors.blackText,
//     },
//     tagContainer: {
//         alignSelf: 'flex-start',
//         paddingHorizontal: 15,
//         marginBottom: 4,
//     },
//     reactionsContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 15,
//         paddingVertical: 0,
//     },
//     reactionsWrapper: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingTop: 12,
//         paddingBottom: 5,
//     },
//     reactionContainer: {
//         marginRight: 12,
//     },
//     contentContainer: {
//         paddingHorizontal: 15,
//         paddingBottom: 0,
//     },
//     content: {
//         fontSize: 16,
//         color: colors.blackText,
//         marginBottom: 5,
//     },
//     date: {
//         fontSize: 16,
//         color: colors.labelIcon,
//     },
//     registerButton: {
//         alignSelf: 'flex-start',
//         marginLeft: 15,
//     },
// });

// export default FeedPost;




import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ReactionElement from './ReactionElement';
import SmallButton from './SmallButton';
import Tag from './Tag'; // Import the Tag component
import colors from '../colors';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const FeedPost = ({ clubImage, clubName, postImage, title, content, postDate, showRegisterButton, registerButtonTitle, showTag, tagTitle, participantDetails }) => {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likesCount, setLikesCount] = useState(123);
    const [commentsCount] = useState(45);
    const [calendarCount] = useState(48);
    const navigation = useNavigation(); // Use useNavigation hook
    const [isRegistered, setIsRegistered] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    };

    const toggleBookmark = () => {
        setSaved(!saved);
    };

    const handleRegisterPress = () => {
        // Navigate to the EventParticipationPage
        navigation.navigate('EventParticipationPage', {
            title,
            clubName,
            location: 'MPH, IICP', // You can adjust these values as needed
            date: '6th Oct 2024',
            time: '2:00 PM - 5:00 PM',
            participantDetails: participantDetails,
            updatePostStatus: () => setIsRegistered(true),
        });
    };

    const renderReaction = (icon, count, isActive, onPress) => (
        <View style={styles.reactionContainer}>
            <ReactionElement
                icon={icon}
                count={count}
                isActive={isActive}
                onPress={onPress}
                iconSize={28}
                textSize={16}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Club Info */}
            <View style={styles.clubInfoContainer}>
                <Image source={clubImage} style={styles.clubImage} />
                <Text style={styles.clubName}>{clubName}</Text>

                <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
                    <ReactionElement
                        icon="bookmark"
                        count={0}
                        isActive={saved}
                        onPress={toggleBookmark}
                        iconSize={28}
                    />
                </TouchableOpacity>
            </View>

            {/* Post Image */}
            {postImage && <Image source={postImage} style={styles.postImage} />}

            {/* Reactions and Register Button */}
            <View style={styles.reactionsContainer}>
                <View style={styles.reactionsWrapper}>
                    {renderReaction("heart", likesCount, liked, toggleLike)}
                    {renderReaction("comment", commentsCount, false, () => console.log('Comment icon pressed'))}
                    {renderReaction("calendar", calendarCount, false, () => console.log('Calendar icon pressed'))}
                </View>
                {showRegisterButton && (
                    <SmallButton
                        title={isRegistered ? 'Registered' : 'Register'}
                        type={isRegistered ? 'disabled' : 'secondary'}
                        onPress={handleRegisterPress}
                        style={styles.registerButton}
                        disabled={isRegistered} 
                    />
                )}
            </View>

            {/* Tag Component */}
            {showTag && (
                <View style={styles.tagContainer}>
                    <Tag title={tagTitle} type="pending" fontSize={12} />
                </View>
            )}

            {/* Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.postTitle}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.date}>{postDate}</Text>
            </View>
        </View>
    );
};

FeedPost.propTypes = {
    clubImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    clubName: PropTypes.string.isRequired,
    postImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    showRegisterButton: PropTypes.bool,
    registerButtonTitle: PropTypes.string,
    showTag: PropTypes.bool,
    tagTitle: PropTypes.string,
    participantDetails: PropTypes.object.isRequired,
};

FeedPost.defaultProps = {
    showRegisterButton: false,
    registerButtonTitle: 'Register',
    showTag: false,
    tagTitle: '',
    participantDetails: {
        name: 'Chow Ching Huey',
        studentId: 'P19011279',
        studentEmail: 'p19011279@student.newinti.edu.my',
        programme: 'BCTCUN',
        contacts: '0111234567',
    },
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 0,
        marginBottom: 20,
    },
    clubInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    clubImage: {
        width: 42,
        height: 42,
        borderRadius: 21,
    },
    clubName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
        marginLeft: 10,
        flex: 1,
    },
    bookmarkButton: {
        padding: 0,
    },
    postImage: {
        width: '100%',
        height: 360,
        resizeMode: 'cover',
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    tagContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        marginBottom: 4,
    },
    reactionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 0,
    },
    reactionsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 5,
    },
    reactionContainer: {
        marginRight: 12,
    },
    contentContainer: {
        paddingHorizontal: 15,
        paddingBottom: 0,
    },
    content: {
        fontSize: 16,
        color: colors.blackText,
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        color: colors.labelIcon,
    },
    registerButton: {
        alignSelf: 'flex-start',
        marginLeft: 15,
    },
});

export default FeedPost;
