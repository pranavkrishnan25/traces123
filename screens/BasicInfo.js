// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   Pressable,
// } from 'react-native';
// import React ,{useEffect} from 'react';
// import LottieView from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from "axios"


// const BasicInfo = () => {
//     const navigation = useNavigation();

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <View style={{marginTop: 80}}>
//         <Text
//           style={{
//             fontSize: 35,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginLeft: 20,
//           }}>
//           You're one of a kind.
//         </Text>
//         <Text
//           style={{
//             fontSize: 33,
//             fontWeight: 'bold',
//             fontFamily: 'GeezaPro-Bold',
//             marginLeft: 20,
//             marginTop: 10,
//           }}>
//           You're profile should be too.
//         </Text>
//       </View>

//       <View>
//         <LottieView
//           source={require('../assets/love.json')}
//           style={{
//             height: 260,
//             width: 300,
//             alignSelf: 'center',
//             marginTop: 40,
//             justifyContent: 'center',
//           }}
//           autoPlay
//           loop={true}
//           speed={0.7}
//         />
//       </View>

//       <Pressable
//       onPress={() => navigation.navigate("Name")}
//         style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontWeight: '600',
//             fontSize: 15,
//           }}>
//           Enter basic Info
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default BasicInfo;

// const styles = StyleSheet.create({});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* ---------------------------------- SVG ---------------------------------- */
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
        width: 522,
        height: 923,
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
/*                   Figma-inspired background with circles                   */
/* -------------------------------------------------------------------------- */
const FigmaBackground = () => {
  return (
    <View style={styles.figmaBgContainer}>
      {/* Circle groups (each containing 3 nested dotted circles) */}
      <View
        style={[
          styles.circleGroup,
          { left: 148.16, top: 922.94, transform: [{ rotate: '-179.77deg' }] },
        ]}
      >
        <View style={styles.outerCircle} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      <View
        style={[
          styles.circleGroup,
          { left: 521.56, top: 824.44, transform: [{ rotate: '-179.77deg' }] },
        ]}
      >
        <View style={styles.outerCircle} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      <View
        style={[
          styles.circleGroup,
          { left: 493.44, top: 357.32, transform: [{ rotate: '-179.77deg' }] },
        ]}
      >
        <View style={styles.outerCircle} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      <View
        style={[
          styles.circleGroup,
          { left: 100, top: 466.74, transform: [{ rotate: '-179.77deg' }] },
        ]}
      >
        <View style={styles.outerCircle} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      <View
        style={[
          styles.circleGroup,
          { left: 264.47, top: 100.4, transform: [{ rotate: '-179.77deg' }] },
        ]}
      >
        <View style={styles.outerCircle} />
        <View style={[styles.midCircle, { left: 15, top: 15 }]} />
        <View style={[styles.innerCircle, { left: 30, top: 30 }]} />
      </View>

      {/* Example curved lines connecting circle centers (tweak as needed) */}
      <CurvedDottedLine
        start={{ x: 148.16 + 50, y: 922.94 + 50 }}
        end={{ x: 521.56 + 50, y: 824.44 + 50 }}
        control={{ x: 360, y: 1000 }}
      />
      <CurvedDottedLine
        start={{ x: 521.56 + 50, y: 824.44 + 50 }}
        end={{ x: 493.44 + 50, y: 357.32 + 50 }}
        control={{ x: 580, y: 550 }}
      />
      <CurvedDottedLine
        start={{ x: 493.44 + 50, y: 357.32 + 50 }}
        end={{ x: 100 + 50, y: 466.74 + 50 }}
        control={{ x: 300, y: 300 }}
      />
      <CurvedDottedLine
        start={{ x: 100 + 50, y: 466.74 + 50 }}
        end={{ x: 264.47 + 50, y: 100.4 + 50 }}
        control={{ x: 180, y: 320 }}
      />
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                          Main BasicInfo component                          */
/* -------------------------------------------------------------------------- */
const BasicInfo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Figma background behind everything */}
      <View style={{ flex: 1 }}>
        <FigmaBackground />

        {/* Main content overlay */}
        <View style={{ flex: 1 }}>
          {/* Removed the “You're one of a kind...” text block */}

          {/* Figma text overlays */}
          {/* "Traces makes things simple" */}
          <View style={{ position: 'absolute', left: 20, top: 157 }}>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#005E18', // dark green
                  fontSize: 28,
                  fontFamily: 'Lexend',
                  fontWeight: '400',
                }}
              >
                Traces makes things simple
              </Text>
            </View>
          </View>

          {/* "Match your friends up..." */}
          <View style={{ position: 'absolute', left: 84, top: 371 }}>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'Lexend',
                  fontWeight: '300',
                }}
              >
                Match your friends up {'\n'}
                with other friends
              </Text>
            </View>
          </View>

          {/* The "or" */}
          <Text
            style={{
              position: 'absolute',
              left: 190,
              top: 441,
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
              fontFamily: 'Lexend',
              fontWeight: '300',
            }}
          >
            or
          </Text>

          {/* "Let your friends find matches for you" */}
          <View style={{ position: 'absolute', left: 95, top: 465 }}>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'Lexend',
                  fontWeight: '300',
                }}
              >
                Let your friends find{'\n'}
                matches for you
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom tab changed from maroon (#900C3F) to green (#005E18) */}
        <Pressable
          onPress={() => navigation.navigate('Name')}
          style={{
            backgroundColor: '#005E18',
            padding: 15,
            marginTop: 'auto',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: 15,
            }}
          >
            Enter basic Info
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default BasicInfo;

/* -------------------------------------------------------------------------- */
/*                                   Styles                                    */
/* -------------------------------------------------------------------------- */
const styles = StyleSheet.create({
  figmaBgContainer: {
    position: 'absolute',
    width: 521.97,
    height: 922.94,
    left: -50.02,
    top: -30.39,
    zIndex: -1, // behind main content
  },
  circleGroup: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  // Nested dotted circles
  outerCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderStyle: 'dotted',
    borderRadius: 9999,
    backgroundColor: 'white',
  },
  midCircle: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderStyle: 'dotted',
    borderRadius: 9999,
    backgroundColor: 'white',
  },
  innerCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderStyle: 'dotted',
    borderRadius: 9999,
    backgroundColor: 'white',
  },
});
