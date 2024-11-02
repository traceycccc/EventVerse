// // TestScreen.js
// import React from 'react';
// import { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import SmallButton from '../components/SmallButton';
// import BigButton from '../components/BigButton';
// import Tag from '../components/Tag';
// import ClubButton from '../components/ClubButton';
// import TextInputField from '../components/TextInputField';

// const TestScreen = () => {
//     const [name, setName] = useState('');  // This will ensure 'name' exists

//     return (
//         <View style={styles.container}>
//             {/* Test different states of the button here */}
//             <SmallButton title="Apply Filters" type="primary" onPress={() => console.log('Primary Button Pressed')} />
//             <SmallButton title="Register" type="secondary" onPress={() => console.log('Secondary Button Pressed')} />
//             <SmallButton title="Registered" type="disabled" onPress={() => console.log('Disabled Button Pressed')} />
//             <BigButton title="Register" onPress={() => console.log('Register Button Pressed')} />
//             <Tag title="Club A" type="primary" />
//             <Tag title="Club A" type="secondary" />
//             <Tag title="Club A" type="pending" />
//             <Tag title="Club A" type="disapproved" />
//             <Tag title="Club A" type="borderless" />
//             <ClubButton
//                 title="Club A"
//                 imageSource={require('../assets/it_club.png')}  // Replace with a real image URL or local image
//                 onPress={() => console.log('Club A Button Pressed')}
//             />

//             <TextInputField
//                 label="Name"
//                 value={name}  // Use 'name' state variable here
//                 onChangeText={(text) => setName(text)}  // Update 'name' state when text changes
//                 placeholder="Enter your name"
//             />



//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
// });

// export default TestScreen;




//-----small button   +   tags   +    big button  +   club button   +   textfield---------------------------------

// TestScreen.js
// import React from 'react';
// import { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import SmallButton from '../components/SmallButton';
// import BigButton from '../components/BigButton';
// import Tag from '../components/Tag';
// import ClubButton from '../components/ClubButton';
// import TextInputField from '../components/TextInputField';
// import ReactionElement from '../components/ReactionElement';

// const TestScreen = () => {
//     const [name, setName] = useState('');  // This will ensure 'name' exists

//     return (
//         <View style={styles.container}>
//             {/* Test different states of the button here */}
//             {/* <SmallButton title="Apply Filters" type="primary" onPress={() => console.log('Primary Button Pressed')} />
//             <SmallButton title="Register" type="secondary" onPress={() => console.log('Secondary Button Pressed')} />
//             <SmallButton title="Registered" type="disabled" onPress={() => console.log('Disabled Button Pressed')} />
//             <BigButton title="Register" onPress={() => console.log('Register Button Pressed')} />
//             <Tag title="Club A" type="primary" />
//             <Tag title="Club A" type="secondary" />
//             <Tag title="Club A" type="pending" />
//             <Tag title="Club A" type="disapproved" />
//             <Tag title="Club A" type="borderless" /> */}
//             <ClubButton
//                 title="Club A"
//                 imageSource={require('../assets/it_club.png')}  // Replace with a real image URL or local image
//                 onPress={() => console.log('Club A Button Pressed')}
//             />

//             <TextInputField
//                 label="Name"
//                 value={name}  // Use 'name' state variable here
//                 onChangeText={(text) => setName(text)}  // Update 'name' state when text changes
//                 placeholder="Enter your name"
//             />



//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
// });

// export default TestScreen;




//----------------------------------------------reaction element-------------------------------
// // TestScreen.js
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import ReactionElement from '../components/ReactionElement';  // Import the ReactionElement component

// const TestScreen = () => {
//     const [liked, setLiked] = useState(false);
//     const [saved, setSaved] = useState(false);
//     const [likesCount, setLikesCount] = useState(123);
//     const [commentsCount, setCommentsCount] = useState(45);

//     return (
//         <View style={styles.container}>
//             {/* Heart icon */}
//             <ReactionElement
//                 icon="heart"
//                 count={likesCount}
//                 isActive={liked}
//                 onPress={() => {
//                     setLiked(!liked);
//                     setLikesCount(liked ? likesCount - 1 : likesCount + 1);
//                 }}
//             />
//             {/* Bookmark icon */}
//             <ReactionElement
//                 icon="bookmark"
//                 count={0}
//                 isActive={saved}
//                 onPress={() => setSaved(!saved)}
//             />
//             {/* Comment icon */}
//             <ReactionElement icon="comment" count={commentsCount} onPress={() => console.log('Comment icon pressed')} />
//             {/* Calendar icon */}
//             <ReactionElement icon="calendar" count={5} onPress={() => console.log('Calendar icon pressed')} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         padding: 20,
//     },
// });

// export default TestScreen;




// --------------------------------------------------icon with text display-------------------------------
// TestScreen.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import InfoElement from '../components/InfoElement'; // Import the InfoElement component

// const TestScreen = () => {
//     return (
//         <View style={styles.container}>
//             {/* Testing InfoElement with different icons and color states */}
//             <InfoElement icon="date" text="23rd July 2024" colorState="black" />
//             <InfoElement icon="location" text="MPH, IICP" colorState="grey" />
//             <InfoElement icon="time" text="10:00 AM" colorState="black" />
//             <InfoElement icon="name" text="Chow Ching Huey" colorState="grey" />
//             <InfoElement icon="course" text="Computer Science" colorState="black" />
//             <InfoElement icon="contact" text="123-456-7890" colorState="grey" />
//             <InfoElement icon="studentId" text="CS12345" colorState="black" />
//             <InfoElement icon="email" text="student@example.com" colorState="grey" />
//             <InfoElement icon="instagram" text="@student" colorState="black" />
//             <InfoElement icon="facebook" text="/studi ent.profile" colorState="grey" />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         padding: 20,
//     },
// });

// export default TestScreen;



//----------------------------------------------------search bar----------------------------
// // TestScreen.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchingBar';  // Import the SearchBar component

// const TestScreen = () => {
//     return (
//         <View style={styles.container}>
//             {/* Plug in the SearchBar component */}
//             <SearchBar placeholder="Give suggestions" />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         padding: 20,
//     },
// });

// export default TestScreen;

//--------------------------------Lists-----------------------------------
// // TestScreen.js
// import React from 'react';
// import { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import NotificationItem from '../components/NotificationItem';
// import EventItem from '../components/EventItem';
// import CommentItem from '../components/CommentItem';
// import CommentInput from '../components/CommentInput';

// const TestScreen = () => {

//     const [comment, setComment] = useState('');
//     return (
//         <View style={styles.container}>
//             {/* Test the NotificationItem component */}
//             <NotificationItem
//                 imageSource={require('../assets/it_club.png')}
//                 title="You have successfully joined the club efegwf ewfgew f"
//                 clubName="Club A"
//             />

//             <EventItem
//                 imageSource={require('../assets/it_club.png')}
//                 title="Welcoming Party"
//                 clubName="Club A"
//                 date="10 Oct 2024"
//             />
//             {/*
//             <CommentItem
//                 imageSource={require('../assets/it_club.png')}
//                 title="Welcoming Party"
//                 content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed dodqdbqwhdj ewde d wed ewd ewd ewd"
//                 reactions={123}
//             />

//             <CommentInput
//                 avatarSource={require('../assets/it_club.png')}
//                 value={comment}
//                 onChangeText={(text) => setComment(text)}
//                 onSendPress={() => {
//                     console.log('Comment sent:', comment);
//                     setComment('');
//                 }}
//             /> */}


//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
// });

// export default TestScreen;


//--------------------------------------------- FAB tabs-------------
// TestScreen.js
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import TabButtonFAQ from '../components/TabButtonFAQ.js';

// const TestScreen = () => {
//     const [selectedTab, setSelectedTab] = useState('General');

//     return (
//         <View style={styles.container}>
//             <View style={styles.tabContainer}>
//                 <TabButtonFAQ
//                     title="General"
//                     chosen={selectedTab === 'General'}
//                     onPress={() => setSelectedTab('General')}
//                 />
//                 <TabButtonFAQ
//                     title="Events"
//                     chosen={selectedTab === 'Events'}
//                     onPress={() => setSelectedTab('Events')}
//                 />
//                 <TabButtonFAQ
//                     title="Membership & Leadership"
//                     chosen={selectedTab === 'Membership & Leadership'}
//                     onPress={() => setSelectedTab('Membership & Leadership')}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     tabContainer: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
// });

// export default TestScreen;



//-----------------------FAQ list display----------------
// TestScreen.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import FAQList from '../components/FAQList';
// import colors from '../colors';

// const TestScreen = () => {
//     const faqData = [
//         { question: 'What is the IT Club?', answer: 'The IT Club is a student organization for tech enthusiasts.' },
//         { question: 'Is there a membership fee required?', answer: 'No, membership in the IT Club is free. However, some events or workshops may have a small fee to cover materials or speaker costs.' },
//     ];

//     return (
//         <View style={styles.container}>
//             <FAQList faqData={faqData} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 0,
//         backgroundColor: colors.background,
//     },
// });

// export default TestScreen;


//-----------------------------------------FAQ section----------------------------
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import FAQSection from '../components/FAQSection';

// const faqDataGeneral = [
//     { question: 'What is the IT Club?', answer: 'The IT Club is a place for technology enthusiasts...' },
//     { question: 'Is there a membership fee required?', answer: 'No, membership in the IT Club is free...' },
// ];

// const faqDataEvents = [
//     { question: 'How do I register for an event?', answer: 'You can register for events by visiting our website...' },
//     { question: 'Are the events online or in-person?', answer: 'We conduct both online and in-person events...' },
// ];

// const faqDataMember = [
//     { question: 'How do I register for an event?', answer: 'You can register for events by visiting our website...' },
//     { question: 'Are the events online or in-person?', answer: 'We conduct both online and in-person events...' },
// ];

// const TestScreen = () => {
//     const sections = [
//         { title: 'General', faqData: faqDataGeneral },
//         { title: 'Events', faqData: faqDataEvents },
//         { title: 'Memberships # weewc', faqData: faqDataMember },
//     ];

//     return (
//         <View style={styles.container}>
//             <FAQSection sections={sections} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
// });

// export default TestScreen;


//--------------info block---------------------
// TestScreen.js
// import React from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import InfoBlock from '../components/InfoBlock';
// import colors from '../colors';

// const TestScreen = () => {
//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <InfoBlock
//                 title="IT Club Seminar"
//                 clubTag="IT Club"
//                 infoElements={[
//                     { icon: 'location', text: 'MPH, IICP', colorState: 'grey' },
//                     { icon: 'date', text: '6th Oct 2024', colorState: 'grey' },
//                     { icon: 'time', text: '2:00 PM - 5:00 PM', colorState: 'grey' },
//                 ]}
//             />
//             <InfoBlock
//                 title="Networking Workshop"
//                 clubTag="Networking Club"
//                 infoElements={[
//                     { icon: 'location', text: 'Auditorium, Main Block', colorState: 'grey' },
//                     { icon: 'date', text: '10th Oct 2024', colorState: 'grey' },
//                     { icon: 'time', text: '10:00 AM - 1:00 PM', colorState: 'grey' },
//                     { icon: 'money', text: 'Mr. John Doe', colorState: 'grey' },
//                 ]}
//             />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         backgroundColor: colors.white,
//     },
// });

// export default TestScreen;


//Info section, display mode + edit mode
// // TestScreen.js
// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import InfoSection from '../components/InfoSection';
// import colors from '../colors';

// const TestScreen = () => {
//     const [name, setName] = useState('Chow Ching Huey');
//     const [studentId, setStudentId] = useState('P19011279');
//     const [programme, setProgramme] = useState('BCTCUN');
//     const [email, setEmail] = useState('p19011279@student.newinti.edu.my');
//     const [contact, setContact] = useState('0111234567');

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Display Mode */}
//             <InfoSection
//                 title="Basic Details"
//                 isEditMode={false}
//                 infoData={[
//                     { icon: 'name', value: name, colorState: 'black' },
//                     { icon: 'studentId', value: studentId, colorState: 'black' },
//                     { icon: 'course', value: programme, colorState: 'black' },
//                 ]}
//             />

//             <InfoSection
//                 title="Contact Details"
//                 isEditMode={false}
//                 infoData={[
//                     { icon: 'email', value: email, colorState: 'black' },
//                     { icon: 'contact', value: contact, colorState: 'black' },
//                 ]}
//             />

//             {/* Edit Mode */}
//             <InfoSection
//                 title="Basic Details"
//                 isEditMode={true}
//                 infoData={[
//                     { label: 'Name', value: name, onChangeText: setName, isDisabled: false },
//                     { label: 'Student ID', value: studentId, onChangeText: setStudentId, isDisabled: true },
//                     { label: 'Programme', value: programme, onChangeText: setProgramme, isDisabled: false },
//                 ]}
//             />

//             <InfoSection
//                 title="Contact Details"
//                 isEditMode={true}
//                 infoData={[
//                     { label: 'Student Email', value: email, onChangeText: setEmail, isDisabled: true },
//                     { label: 'Contacts', value: contact, onChangeText: setContact, isDisabled: false },
//                 ]}
//             />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         padding: 20,
//         backgroundColor: colors.white,
//     },
// });

// export default TestScreen;


//TestScreen.js ---------------------club profile page-----------
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import ClubProfile from '../components/ClubProfile';
// import colors from '../colors';

// const TestScreen = () => {
//     return (
//         <ClubProfile
//             wallpaperImage={require('../assets/it_club.png')}
//             clubImage={require('../assets/it_club.png')}
//             clubName="IT Club"
//             membersCount={50}
//             aboutText="The IT Club is a community of students passionate about technology, coding, cybersecurity, software development, and all things IT. We aim to provide learning resources, organize events, and help members grow their technical skills."
//             isMember={false}
//             onJoinPress={() => alert('Press OK to confirm joining the club')}
//             links={[
//                 { icon: 'email', value: 'itclub@gmail.com' },
//                 { icon: 'instagram', value: 'it_club' },
//                 { icon: 'facebook', value: 'IT_club' },
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

// export default TestScreen;



// -------------------------FeedPost------------------------------
// // TestScreen.js
// // TestScreen.js
// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import FeedPost from '../components/FeedPost';
// import colors from '../colors';

// const TestScreen = () => {
//     const handleBookmarkPress = () => {
//         console.log('Bookmark pressed');
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <FeedPost
//                 clubImage={require('../assets/it_club.png')}
//                 clubName="Club C"
//                 postImage={require('../assets/it_club.png')}
//                 content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//                 postDate="16 Sept 2024"
//                 onBookmarkPress={handleBookmarkPress}
//                 showRegisterButton={true}
//                 registerButtonTitle="Register"
//             />
//             <FeedPost
//                 clubImage={require('../assets/it_club.png')}
//                 clubName="Club C"
//                 postImage={require('../assets/it_club.png')}
//                 content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//                 postDate="16 Sept 2024"
//                 onBookmarkPress={handleBookmarkPress}
//                 showRegisterButton={true}
//                 registerButtonTitle="Register"
//             />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: colors.white,
//     },
// });

// export default TestScreen;



//-----------------HUb Page ----------------------------
// TestScreen.js
// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
// import HubPost from '../components/HubPost';
// import CommentSection from '../components/CommentSection';
// import colors from '../colors';

// const TestScreen = () => {
//     const [isCommentSectionVisible, setCommentSectionVisible] = useState(false);
//     const [comments, setComments] = useState([
//         { userImage: require('../assets/it_club.png'), username: 'User 1', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 123 },
//         { userImage: require('../assets/it_club.png'), username: 'User 2', comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 45 },
//         { userImage: require('../assets/it_club.png'), username: 'User 3', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', likesCount: 78 },
//     ]);

//     const handleSendComment = (newComment) => {
//         if (newComment.trim()) {
//             setComments((prevComments) => [
//                 ...prevComments,
//                 { userImage: require('../assets/it_club.png'), username: 'You', comment: newComment, likesCount: 0 },
//             ]);
//         }
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Multiple HubPosts */}
//             <HubPost
//                 clubImage={require('../assets/it_club.png')}
//                 clubName="Club A"
//                 postDate="10 Oct 2024"
//                 title="Title yyy"
//                 content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//                 onCommentPress={() => setCommentSectionVisible(true)}
//             />
//             <HubPost
//                 clubImage={require('../assets/it_club.png')}
//                 clubName="Club B"
//                 postDate="12 Oct 2024"
//                 title="Title zzz"
//                 content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//                 onCommentPress={() => setCommentSectionVisible(true)}
//             />

//             {/* Comment Section Modal */}
//             <Modal
//                 visible={isCommentSectionVisible}
//                 animationType="slide"
//                 transparent={false} // Make sure the modal covers the full screen
//                 onRequestClose={() => setCommentSectionVisible(false)}
//             >
//                 <View style={styles.commentContainer}>
//                     <TouchableOpacity onPress={() => setCommentSectionVisible(false)}>
//                         <Text style={styles.headerText}>Comments</Text>
//                     </TouchableOpacity>
//                     <CommentSection
//                         comments={comments}
//                         onSendComment={handleSendComment}
//                         onClose={() => setCommentSectionVisible(false)}
//                     />
//                 </View>
//             </Modal>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         padding: 0,
//         backgroundColor: colors.white,
//     },
//     commentContainer: {
//         flex: 1,
//         backgroundColor: colors.white,
//         paddingTop: 20,
//         paddingHorizontal: 0,
//     },
//     headerText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.blackText,
//         textAlign: 'center',
//         paddingVertical: 10,
//     },
// });

// export default TestScreen;


//----------------------------Tab Page Testing ---------------
// TestScreen.js
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import TabButtonPage from '../components/TabButtonPage';
// import ITProfilePage from '../subscreens/ITProfilePage';
// import ClubHub from '../components/ClubHub';
// import colors from '../colors';

// const TestScreen = () => {
//     const [chosenTabIndex, setChosenTabIndex] = useState(0);

//     const tabs = [

//         { title: 'Profile' },
//         { title: 'Hub' },
//     ];

//     // Create a function that returns the correct component based on chosenTabIndex
//     const renderSelectedTab = () => {
//         switch (chosenTabIndex) {
//             case 0:
//                 return <ITProfilePage />;
//             case 1:
//                 return <ClubHub />;
//             default:
//                 return <FeedPage />;
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {/* Tab Button Page */}
//             <TabButtonPage
//                 tabs={tabs}
//                 chosenIndex={chosenTabIndex}
//                 onTabPress={(index) => setChosenTabIndex(index)}
//             />
//             {/* Render selected page content below tabs */}
//             <View style={styles.contentContainer}>
//                 {renderSelectedTab()}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     contentContainer: {
//         flex: 1,
//     },
// });

// export default TestScreen;



// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import TabButtonPage from '../components/TabButtonPage';
// import ITProfilePage from '../subscreens/ITProfilePage';
// import ClubAHub from '../subscreens/ClubAHub';
// import colors from '../colors';

// const TestScreen = () => {
//     const [chosenTabIndex, setChosenTabIndex] = useState(0);

//     const tabs = [
//         { title: 'Profile' },
//         { title: 'Hub' },
//     ];

//     // Create a function that returns the correct component based on chosenTabIndex
//     const renderSelectedTab = () => {
//         switch (chosenTabIndex) {
//             case 0:
//                 return <ITProfilePage />;
//             case 1:
//                 return <ClubAHub />;
//             default:
//                 return <ITProfilePage />;
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {/* Tab Button Page */}
//             <TabButtonPage
//                 tabs={tabs}
//                 chosenIndex={chosenTabIndex}
//                 onTabPress={(index) => setChosenTabIndex(index)}
//             />
//             {/* Render selected page content below tabs */}
//             <View style={styles.contentContainer}>
//                 {renderSelectedTab()}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     contentContainer: {
//         flex: 1,
//     },
// });

// export default TestScreen;


// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import TabButtonPage from '../components/TabButtonPage';
// import ITProfilePage from '../subscreens/ITProfilePage';
// import ClubAHub from '../subscreens/ClubAHub';
// import HubSearchingBar from '../components/HubSearchingBar';
// import colors from '../colors';

// const TestScreen = () => {
//     const [chosenTabIndex, setChosenTabIndex] = useState(0);
//     const [isSearching, setIsSearching] = useState(false);
//     const navigation = useNavigation();

//     const tabs = [
//         { title: 'Profile' },
//         { title: 'Hub' },
//     ];

//     const handleSearchClose = () => {
//         setIsSearching(false);
//     };

//     // Create a function that returns the correct component based on chosenTabIndex
//     const renderSelectedTab = () => {
//         if (isSearching && chosenTabIndex === 1) {
//             return (
//                 <HubSearchingBar
//                     placeholder="Search Hub Posts..."
//                     onSearchResultPress={(searchResult) => {
//                         setIsSearching(false);
//                         // Pass search result to ClubAHub to reorder posts
//                         if (searchResult === 'AAA') {
//                             navigation.setParams({ reorderTitle: 'AAA' });
//                         }
//                     }}
//                 />
//             );
//         }

//         switch (chosenTabIndex) {
//             case 0:
//                 return <ITProfilePage />;
//             case 1:
//                 return <ClubAHub />;
//             default:
//                 return <ITProfilePage />;
//         }
//     };

//     useEffect(() => {
//         // Set navigation options for the header based on the selected tab
//         if (chosenTabIndex === 1) {
//             // If Hub tab is selected, add a search icon to the header
//             navigation.setOptions({
//                 headerRight: () => (
//                     <MaterialIcons
//                         name="search"
//                         size={24}
//                         color={colors.white}
//                         style={{ marginRight: 15 }}
//                         onPress={() => setIsSearching(true)}
//                     />
//                 ),
//             });
//         } else {
//             // Remove the search icon when not on the Hub tab
//             navigation.setOptions({
//                 headerRight: () => null,
//             });
//         }
//     }, [chosenTabIndex, navigation]);

//     return (
//         <View style={styles.container}>
//             {/* Tab Button Page */}
//             <TabButtonPage
//                 tabs={tabs}
//                 chosenIndex={chosenTabIndex}
//                 onTabPress={(index) => {
//                     setIsSearching(false); // Close search bar if switching tabs
//                     setChosenTabIndex(index);
//                 }}
//             />
//             {/* Render selected page content below tabs */}
//             <View style={styles.contentContainer}>
//                 {renderSelectedTab()}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     contentContainer: {
//         flex: 1,
//     },
// });

// export default TestScreen;


// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import TabButtonPage from '../components/TabButtonPage';
// import ITProfilePage from '../subscreens/ITProfilePage';
// import ClubAHub from '../subscreens/ClubAHub';
// import HubSearchingBar from '../components/HubSearchingBar';
// import colors from '../colors';
// import CheckBox from '../components/CheckBox';


// const TestScreen = () => {
//     const [chosenTabIndex, setChosenTabIndex] = useState(0);
//     const [isSearching, setIsSearching] = useState(false);
//     const [posts, setPosts] = useState([
//         { title: 'Title yyy', content: 'Lorem ipsum dolor sit amet...', postDate: '10 Oct 2024', key: '1' },
//         { title: 'Title zzz', content: 'Lorem ipsum dolor sit amet...', postDate: '12 Oct 2024', key: '2' },
//         { title: 'Title zzz', content: 'Lorem ipsum dolor sit amet...', postDate: '12 Oct 2024', key: '3' },
//         { title: 'AAA', content: 'Lorem ipsum dolor sit amet...', postDate: '12 Oct 2024', key: '4' },
//     ]);
//     const navigation = useNavigation();

//     const tabs = [
//         { title: 'Profile' },
//         { title: 'Hub' },
//     ];

//     const handleSearchResultSelect = (searchResult) => {
//         // Move the "AAA" post to the top of the list
//         const updatedPosts = posts.filter(post => post.title !== searchResult);
//         const selectedPost = posts.find(post => post.title === searchResult);
//         if (selectedPost) {
//             setPosts([selectedPost, ...updatedPosts]);
//         }
//         setIsSearching(false); // Close search bar
//     };

//     const renderSelectedTab = () => {
//         if (isSearching) {
//             return <HubSearchingBar placeholder="Search Hub Posts..." onResultSelect={handleSearchResultSelect} onBackPress={() => setIsSearching(false)} />;
//         }

//         switch (chosenTabIndex) {
//             case 0:
//                 return <ITProfilePage />;
//             case 1:
//                 return <ClubAHub posts={posts} />;
//             default:
//                 return <ITProfilePage />;
//         }
//     };

//     useEffect(() => {
//         if (chosenTabIndex === 1) {
//             navigation.setOptions({
//                 headerRight: () => (
//                     <MaterialIcons
//                         name="search"
//                         size={24}
//                         color={colors.white}
//                         style={{ marginRight: 15 }}
//                         onPress={() => setIsSearching(true)}
//                     />
//                 ),
//             });
//         } else {
//             navigation.setOptions({
//                 headerRight: () => null,
//             });
//         }
//     }, [chosenTabIndex, navigation]);

//     return (
//         <View style={styles.container}>
//             <TabButtonPage
//                 tabs={tabs}
//                 chosenIndex={chosenTabIndex}
//                 onTabPress={(index) => {
//                     setIsSearching(false);
//                     setChosenTabIndex(index);
//                 }}
//             />
//             <View style={styles.contentContainer}>
//                 {renderSelectedTab()}
//             </View>
            
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     contentContainer: {
//         flex: 1,
//     },
// });

// export default TestScreen;



// // Requests.js
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// import EventItem from '../components/EventItem';
// import colors from '../colors';
// import { useNavigation } from '@react-navigation/native';

// const Requests = () => {
//     const navigation = useNavigation(); // Get the navigation object

//     const handlePress = () => {
//         // Navigate to FeedScreen and set "Joined" tab as active
//         navigation.navigate('Feed', {
//             tabIndex: 1, // 1 for "Joined" tab
//         });
//     };

//     return (
//         <ScrollView style={styles.container}>
//             {/* Section for 2 Sept 2024 */}
//             <View style={styles.dateSection}>
//                 <Text style={styles.dateText}>Join Requests</Text>
//                 <View style={styles.listSection}>
                    
//                     <EventItem
//                         imageSource={require('../assets/club.png')}
//                         title="IT Club"
//                         clubName="Pending"
//                         tagType="pending"
//                         date="10 oct 2024"
//                     />
//                     <EventItem
//                         imageSource={require('../assets/club.png')}
//                         title="Club B"
//                         clubName="Approved"
//                         tagType="secondary"
//                         date="10 oct 2024"
//                     />
//                     <EventItem
//                         imageSource={require('../assets/club.png')}
//                         title="Club A"
//                         clubName="Approved"
//                         tagType="secondary"
//                         date="10 oct 2024"
//                     />
//                     <EventItem
//                         imageSource={require('../assets/club.png')}
//                         title="Club A"
//                         clubName="Rejected"
//                         tagType="disapproved"
//                         date="10 oct 2024"
//                     />
                    
                    
//                 </View>
//             </View>

            
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     dateSection: {
//     },
//     dateText: {
//         fontSize: 16,
//         fontWeight: 'semibold',
//         color: colors.pendingText,
//         marginBottom: 10,
//         marginTop: 10,
//         paddingHorizontal: 16,
//     },
//     listSection: {
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         borderColor: colors.greyLine, // You can adjust the color to match the design
//         marginBottom: 16,
//         paddingVertical: 0,
//     },
// });

// export default Requests;


// // ClubsPage.js
// import React from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';
// import ClubButton from '../components/ClubButton'; // Assuming ClubButton is in the same directory
// import colors from '../colors';

// const clubData = [
//     { id: '1', title: 'IT Club', imageSource: require('../assets/club.png') }, // Use your actual image paths
//     { id: '2', title: 'Club A', imageSource: require('../assets/club.png') },
//     { id: '3', title: 'Club B', imageSource: require('../assets/club.png') },
//     { id: '4', title: 'Club C', imageSource: require('../assets/club.png') },
//     { id: '5', title: 'Club D', imageSource: require('../assets/club.png') }, // Odd item, ensure it aligns to the left
// ];

// const ClubsPage = ({ navigation }) => {
//     const renderClubButton = ({ item, index }) => (
//         <View style={[styles.clubButtonContainer, (index % 2 === 1) ? styles.rightAlign : styles.leftAlign]}>
//             <ClubButton
//                 title={item.title}
//                 imageSource={item.imageSource}
//                 onPress={() => console.log(`${item.title} pressed`)} // Replace with actual navigation or functionality
//             />
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={clubData}
//                 renderItem={renderClubButton}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 contentContainerStyle={styles.flatListContent}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//         padding: 10,
//     },
//     flatListContent: {
//         justifyContent: 'center',
//     },
//     clubButtonContainer: {
//         flex: 1,
//         marginHorizontal: 22,
//         alignItems: 'center',
//     },
//     leftAlign: {
//         alignItems: 'flex-start', // Aligns items to the left
//     },
//     rightAlign: {
//         alignItems: 'flex-end', // Aligns items to the right
//     },
// });

// export default ClubsPage;



// MemberRequestPage.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';
import InfoBlock from '../components/InfoBlock';
import InfoSection from '../components/InfoSection';
import BigButton from '../components/BigButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MemberRequestPage = ({ route }) => {
    const { title, clubName, money, memberDetails } = route.params;
    const [name, setName] = useState(memberDetails.name);
    const [programme, setProgramme] = useState(memberDetails.programme);
    const [contacts, setContacts] = useState(memberDetails.contacts);
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
                        // Navigate back to FeedScreen and update the button status
                        navigation.navigate('Feed', {
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
                    { icon: 'money', text: money, colorState: 'black' },
                    { icon: 'date', text: date, colorState: 'black' },
                    { icon: 'time', text: time, colorState: 'black' },
                ]}
            />
            <InfoSection contentContainerStyle={styles.infoContainer}
                title="Participant Details"
                infoData={[
                    { label: 'Name', value: name, onChangeText: setName, isDisabled: false },
                    { label: 'Student ID', value: memberDetails.studentId, isDisabled: true },
                    { label: 'Student Email', value: memberDetails.studentEmail, isDisabled: true },
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

export default MemberRequestPage;



