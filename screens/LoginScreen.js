// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
//   Pressable,
//   KeyboardAvoidingView,
// } from 'react-native';
// import React, {useState,useEffect,useContext} from 'react';
// import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import LottieView from 'lottie-react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const route = useRoute();
//   console.log(route)
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();
//   const [option, setOption] = useState('Create account');
//   const { token, isLoading,setToken } = useContext(AuthContext);

//   console.log(token)

//   useEffect(() => {
//     // Check if the token is set and not in loading state
//     if (token) {
//       // Navigate to the main screen
//       navigation.navigate('MainStack', { screen: 'Main' });
//     }
//   }, [token, navigation]);
//   const signInUser = async() => {
//     setOption('Sign In');


//       try {
//         console.log(email);
//         console.log(password);
//         const user = {
//           email: email,
//           password: password,
//         };
//         const response = await axios.post('http://localhost:3000/login', user);
//         console.log('Dfdfd');
//         const token = response.data.token;
        
//         // Store the token in AsyncStorage
//         await AsyncStorage.setItem('token', token);

//         setToken(token)
//         // navigation.replace('Main');
//       } catch (error) {
//         console.log('error',error);
//       }
  
//   };
//   const createAccount = () => {
//     setOption('Create account');

//     navigation.navigate('Basic');
//   };
//   const handleLogin = () => {
//     const user = {
//       email: email,
//       password: password,
//     };
//     axios.post('http://localhost:3000/login', user).then(response => {
//       console.log(response);
//       const token = response.data.token;
//       AsyncStorage.setItem('auth', token);
//       router.replace('/(authenticate)/select');
//     });
//   };
//   return (
//     <SafeAreaView
//       style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
//       <View
//         style={{
//           height: 200,
//           backgroundColor: '#581845',
//           width: '100%',
//           borderBottomLeftRadius: 100,
//           borderBottomRightRadius: 100,
//         }}>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 25,
//           }}>
//           <Image
//             style={{width: 150, height: 80, resizeMode: 'contain'}}
//             source={{
//               uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png',
//             }}
//           />
//         </View>
//         <Text
//           style={{
//             marginTop: 20,
//             textAlign: 'center',
//             fontSize: 23,
//             fontFamily: 'GeezaPro-Bold',
//             color: 'white',
//           }}>
//           Traces
//         </Text>
//       </View>

//       <KeyboardAvoidingView>
//         <View style={{alignItems: 'center'}}>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: 'bold',
//               marginTop: 25,
//               color: '#581845',
//             }}>
//             Desgined to be deleted
//           </Text>
//         </View>

//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 20,
//           }}>
//           <Image
//             style={{width: 100, height: 80, resizeMode: 'cover'}}
//             source={{
//               uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png',
//             }}
//           />
//         </View>

//         <View style={{marginTop: 20}}>
//           {option == 'Sign In' ? (
//             <>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   gap: 5,
//                   backgroundColor: '#581845',
//                   paddingVertical: 5,
//                   borderRadius: 5,
//                   marginTop: 30,
//                 }}>
//                 <MaterialIcons
//                   style={{marginLeft: 8}}
//                   name="email"
//                   size={24}
//                   color="white"
//                 />
//                 <TextInput
//                   value={email}
//                   onChangeText={text => setEmail(text)}
//                   placeholder="Enter your email"
//                   placeholderTextColor={'white'}
//                   style={{
//                     color: 'white',
//                     marginVertical: 10,
//                     width: 300,
//                     // fontSize: password ? 17 : 17,
//                   }}
//                 />
//               </View>

//               <View style={{}}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     gap: 5,
//                     backgroundColor: '#581845',
//                     paddingVertical: 5,
//                     borderRadius: 5,
//                     marginTop: 30,
//                   }}>
//                   <AntDesign
//                     style={{marginLeft: 8}}
//                     name="lock1"
//                     size={24}
//                     color="white"
//                   />
//                   <TextInput
//                     value={password}
//                     onChangeText={text => setPassword(text)}
//                     secureTextEntry={true}
//                     placeholder="Enter your password"
//                     style={{
//                       color: 'white',
//                       marginVertical: 10,
//                       width: 300,
//                       //   fontSize: password ? 17 : 17,
//                     }}
//                     placeholderTextColor="white"
//                   />
//                 </View>
//               </View>

//               <View
//                 style={{
//                   marginTop: 12,
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                 }}>
//                 <Text>Keep me logged in</Text>

//                 <Text style={{color: '#007FFF', fontWeight: '500'}}>
//                   Forgot Password
//                 </Text>
//               </View>
//             </>
//           ) : (
//             <View>
//               <LottieView
//                 source={require('../assets/login.json')}
//                 style={{
//                   height: 180,
//                   width: 300,
//                   alignSelf: 'center',
//                   marginTop: 40,
//                   justifyContent: 'center',
//                 }}
//                 autoPlay
//                 loop={true}
//                 speed={0.7}
//               />
//             </View>
//           )}

//           <View style={{marginTop: 40}} />

//           <Pressable
//             onPress={createAccount}
//             style={{
//               width: 300,
//               backgroundColor:
//                 option == 'Create account' ? '#581845' : 'transparent',
//               borderRadius: 6,
//               marginLeft: 'auto',
//               marginRight: 'auto',
//               padding: 15,
//               borderRadius: 30,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 color: option == 'Create account' ? 'white' : 'black',
//                 fontSize: 16,
//                 fontWeight: 'bold',
//               }}>
//               Create account
//             </Text>
//           </Pressable>

//           <Pressable
//             onPress={signInUser}
//             style={{
//               width: 300,
//               backgroundColor: option == 'Sign In' ? '#581845' : 'transparent',
//               borderRadius: 6,
//               marginLeft: 'auto',
//               marginRight: 'auto',
//               padding: 15,
//               borderRadius: 30,
//               marginTop: 20,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 color: option == 'Sign In' ? 'white' : 'black',
//                 fontSize: 16,
//                 fontWeight: 'bold',
//               }}>
//               Sign In
//             </Text>
//           </Pressable>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({});

import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

// 1) Import from react-native-svg for curved dotted lines
import Svg, { Path } from 'react-native-svg';

/* -------------------------------------------------------------------------- */
/*                        Curved dotted line component                        */
/* -------------------------------------------------------------------------- */
const CurvedDottedLine = ({ start, end, control }) => {
  // We'll build a quadratic bezier path: M(start) Q(control) (end)
  const path = `M${start.x},${start.y} Q${control.x},${control.y} ${end.x},${end.y}`;

  return (
    <Svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 523,   // match the container's width
        height: 923,  // match the container's height
      }}
    >
      <Path
        d={path}
        stroke="#B5B5B5"
        strokeWidth={2}
        strokeDasharray={[4, 4]} // dotted effect
        fill="none"
      />
    </Svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                Component for background circles & curved lines             */
/* -------------------------------------------------------------------------- */
const FigmaBackground = () => {
  return (
    <View style={styles.figmaBgContainer}>
      {/* Circle group - top-right */}
      <View style={[styles.circleGroup, { left: 373, top: 0 }]}>
        <View style={[styles.outerCircle]} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      {/* Circle group - top-left */}
      <View style={[styles.circleGroup, { left: 0, top: 100 }]}>
        <View style={[styles.outerCircle]} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      {/* Circle group - bottom-left */}
      <View style={[styles.circleGroup, { left: 30, top: 567 }]}>
        <View style={[styles.outerCircle]} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      {/* Circle group - bottom-right */}
      <View style={[styles.circleGroup, { left: 423, top: 456 }]}>
        <View style={[styles.outerCircle]} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      {/* Circle group - far bottom */}
      <View style={[styles.circleGroup, { left: 260, top: 823 }]}>
        <View style={[styles.outerCircle]} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      {/* Example curved lines connecting circle centers */}
      {/* NOTE: Adjust coordinates for a perfect match to your circles */}
      <CurvedDottedLine
        start={{ x: 423 + 50, y: 0 + 50 }}
        end={{ x: 0 + 50, y: 100 + 50 }}
        control={{ x: 236.5, y: 10 }}
      />
      <CurvedDottedLine
        start={{ x: 0 + 50, y: 100 + 50 }}
        end={{ x: 30 + 50, y: 567 + 50 }}
        control={{ x: 50, y: 300 }}
      />
      <CurvedDottedLine
        start={{ x: 30 + 50, y: 567 + 50 }}
        end={{ x: 423 + 50, y: 456 + 50 }}
        control={{ x: 220, y: 570 }}
      />
      <CurvedDottedLine
        start={{ x: 423 + 50, y: 456 + 50 }}
        end={{ x: 260 + 50, y: 823 + 50 }}
        control={{ x: 400, y: 700 }}
      />
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                           Main LoginScreen code                            */
/* -------------------------------------------------------------------------- */
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('Create account');

  const route = useRoute();
  const navigation = useNavigation();
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigation.navigate('MainStack', { screen: 'Main' });
    }
  }, [token, navigation]);

  const signInUser = async () => {
    setOption('Sign In');
    try {
      const user = { email, password };
      const response = await axios.post('http://localhost:3000/login', user);
      const newToken = response.data.token;
      await AsyncStorage.setItem('token', newToken);
      setToken(newToken);
    } catch (error) {
      console.log('error', error);
    }
  };

  const createAccount = () => {
    setOption('Create account');
    navigation.navigate('Basic');
  };

  const handleLogin = () => {
    // This function is also doing the same login logic, but let's keep it
    // if it's used by other parts of your code. 
    const user = { email, password };
    axios.post('http://localhost:3000/login', user).then(response => {
      const newToken = response.data.token;
      AsyncStorage.setItem('auth', newToken);
      // If you're using React Navigation, you'll want to do something like:
      // navigation.replace('MainStack');
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* The background with dotted circles + curved dotted lines */}
      <View style={{ flex: 1 }}>
        <FigmaBackground />

        {/* Main content overlay */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          {/* Removed the old purple overhead completely */}

          {/* Title & tagline from Figma code (adjusted sizing for mobile) */}
          <View style={{ marginTop: 80 }}>
            <Text
              style={{
                fontSize: 48, 
                textAlign: 'center',
                color: '#005E18', // dark green
                fontWeight: '400',
                fontFamily: 'Lexend',
              }}
            >
              Traces
            </Text>
          </View>

          <View style={{ marginHorizontal: 25, marginTop: 20 }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#005E18', // dark green
                fontSize: 22,
                fontWeight: '300',
                fontFamily: 'Lexend',
              }}
            >
              Matchmaking for friends, by friends
            </Text>
          </View>

          {/* Existing content (login UI) */}
          <KeyboardAvoidingView style={{ width: '100%', marginTop: 40 }}>
            <View style={{ alignItems: 'center' }}>
              {option === 'Sign In' ? (
                <>
                  {/* Email input */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                      backgroundColor: '#005E18', 
                      paddingVertical: 5,
                      borderRadius: 5,
                      marginTop: 30,
                    }}
                  >
                    <MaterialIcons
                      style={{ marginLeft: 8 }}
                      name="email"
                      size={24}
                      color="white"
                    />
                    <TextInput
                      value={email}
                      onChangeText={text => setEmail(text)}
                      placeholder="Enter your email"
                      placeholderTextColor="white"
                      style={{
                        color: 'white',
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>

                  {/* Password input */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                      backgroundColor: '#005E18', 
                      paddingVertical: 5,
                      borderRadius: 5,
                      marginTop: 30,
                    }}
                  >
                    <AntDesign
                      style={{ marginLeft: 8 }}
                      name="lock1"
                      size={24}
                      color="white"
                    />
                    <TextInput
                      value={password}
                      onChangeText={text => setPassword(text)}
                      secureTextEntry={true}
                      placeholder="Enter your password"
                      placeholderTextColor="white"
                      style={{
                        color: 'white',
                        marginVertical: 10,
                        width: 300,
                      }}
                    />
                  </View>

                  {/* Keep me logged in + Forgot Password */}
                  <View
                    style={{
                      marginTop: 12,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: 300,
                    }}
                  >
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: '#007FFF', fontWeight: '500' }}>
                      Forgot Password
                    </Text>
                  </View>
                </>
              ) : (
                // Removed the LottieView usage here
                <View style={{ marginTop: 50, alignItems: 'center' }}>
                  <Image
                    style={{ width: 120, height: 120, resizeMode: 'contain' }}
                    source={{
                      uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png',
                    }}
                  />
                </View>
              )}
            </View>

            <View style={{ marginTop: 40 }} />

            {/* Create account button */}
            <Pressable
              onPress={createAccount}
              style={{
                width: 300,
                backgroundColor:
                  option === 'Create account' ? '#005E18' : 'transparent',
                borderRadius: 30,
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: 15,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: option === 'Create account' ? 'white' : 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                Create account
              </Text>
            </Pressable>

            {/* Sign In button */}
            <Pressable
              onPress={signInUser}
              style={{
                width: 300,
                backgroundColor:
                  option === 'Sign In' ? '#005E18' : 'transparent',
                borderRadius: 30,
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: 15,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: option === 'Sign In' ? 'white' : 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

/* -------------------------------------------------------------------------- */
/*                                   Styles                                    */
/* -------------------------------------------------------------------------- */
const styles = StyleSheet.create({
  figmaBgContainer: {
    position: 'absolute',
    width: 523,
    height: 923,
    left: -50,
    top: -30,
    zIndex: -1, // ensure it's behind the main content
  },
  circleGroup: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  outerCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderStyle: 'dotted',
    backgroundColor: 'white',
  },
  midCircle: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderStyle: 'dotted',
    backgroundColor: 'white',
  },
  innerCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderStyle: 'dotted',
    backgroundColor: 'white',
  },
});
