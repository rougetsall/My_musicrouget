// import * as React from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { Audio } from 'expo-av';

// export default function App() {
//   const [sound, setSound] = React.useState();

//   async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//        require('./assets/sonnerie-diphone.mp3')
//     );
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync(); }
//     async function pauseSound() {
//       console.log('Playing Sound');
//       await sound.pauseAsync(); }
  
//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync(); }
//       : undefined;
//   }, [sound]);

//   return (
//     <View style={styles.container}>
//       <Button title="Play Sound" onPress={playSound} />
//       <Button title="pause Sound" onPress={pauseSound} />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 10,
//   },
// });


import React from 'react';
import {} from 'react-native';
import Afficher from "./components/afficher"




export default class App extends React.Component {
  render() {
    return (
      <Afficher />
     
    );
  }
}

// import React from 'react';
// import {View,Text} from 'react-native';
// import propTypes from 'prop-types';
// import Afficher from "./src/afficher"
// import { LogBox } from 'react-native';

// // Ignore log notification by message:
// LogBox.ignoreLogs(['Warning: ...']);

// // Ignore all log notifications:
// LogBox.ignoreAllLogs();

// export default class App extends React.Component {
//   render() {
//     return (
//       <Afficher />
     
//     );
//   }
// }


