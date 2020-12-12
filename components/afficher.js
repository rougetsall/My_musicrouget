import React, {components} from 'react';
import { SearchBar } from 'react-native-elements';
import ytdl from "react-native-ytdl"
import { StyleSheet,View,SafeAreaView,ScrollView,Text,Alert,Button,TouchableOpacity,Image} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import {
  Header,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const audioPlaylist = [{uri:
  'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3'},
{uri:
  'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_a_shakespeare.mp3'}];
//   const  runTests = async () => {
//   const URL = 'https://www.youtube.com/watch?v=04GiqLjRO3A';
//   let FAILED_TEST_COUNT = 0;

//   const downloadURLsToFile = async (url, path) =>{
   
//     let Permission = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
//     if (Permission.status !== 'granted') {
//       Permission = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
//     }
//     if (Permission.status === 'granted') {
//       const fileInfo = await FileSystem.getInfoAsync(path);
//       if (fileInfo.exists === true ) {
//         await FileSystem.deleteAsync(path);
//       }
      
//       FileSystem.downloadAsync(url,path).then( ({sons}) => {
//         this.setState(prevState => ({
//           audioPlaylist: [...prevState.audioPlaylist, {uri: sons}]
//         }))
//         alert('Saved to sons');
//         console.log('start')}).catch( e => console.log('error'));
//       console.log('The file is saved to:', path);
//     } else {
//       Alert.alert(
//         'Permission Denied!',
//         'You need to give storage permission to download the file'
//       );
//       return;
//     }
//   };
//   const testURLIsValidAndVideoIdIsExtracted = () => {
//     /**
//      * Just Testing getVideoID(URL) with URL input (not videoId) will implicitly test the following as well:
//      * - ytdl.validateURL()
//      * - ytdl.getURLVideoID()
//      */
//     console.log('🚀 [TEST] "testURLIsValidAndVideoIdIsExtracted" has started');
//     const videoId = ytdl.getVideoID(URL);
//     if (videoId !== "04GiqLjRO3A") {
//       console.error('❌ [TEST FAILED] "testURLIsValidAndVideoIdIsExtracted": ' +
//         `EXPECTED "videoId === 04GiqLjRO3A  BUT GOT "${videoId}"`);
//       FAILED_TEST_COUNT++;
//     } else {
//       console.log('✅ [TEST] "testURLIsValidAndVideoIdIsExtracted" has passed');
//     }
//   };

//   const testDownloadableURLIsSavedToFile = async () => {
    
//     /**
//      * Just Testing ytdl(, {quality:'highestaudio'}) will implicitly test the following as well:
//      * - ytdl.chooseFormat()
//      * - ytdl.getInfo()
//      * - ytdl.getBasicInfo()
//      */
//     console.log('🚀 [TEST] "testDownloadableURLIsSavedToFile" has started');
//     const downloadableURLs = await ytdl(URL, { quality: 'highestaudio' });
//     const path = FileSystem.documentDirectory + '/file.mp3';
//     const savedPath = await downloadURLsToFile(downloadableURLs, path);

//     const fileStat = await FileSystem.getInfoAsync(savedPath);
//     const size = fileStat.size;
//     console.log(size);
//     if (size < 687230) {
//       console.error('❌ [TEST FAILED] "testDownloadableURLIsSavedToFile": ' +
//         `EXPECTED "size >= 687230" BUT GOT "${size}"`);
//       FAILED_TEST_COUNT++;
//     } else {
      
//       console.log('✅ [TEST] "testDownloadableURLIsSavedToFile" has passed '+`"${size}"`);
//     }
//   };

//   const testCache = () => {
//     /**
//      * Cache will be filled with data after a URLs info has been retrieved or
//      * if html5player player tokens are saved.
//      *
//      * Note: This test needs to be run after fetching a downloadable URL
//      */
//     console.log('🚀 [TEST] "testCache" has started');
//     const cache = ytdl.cache;
//     if (!cache.sig || !cache.info) {
//       console.error('❌ [TEST FAILED] "testCache": ' +
//         `EXPECTED "cache.sig && cache.info" BUT GOT "cache.sig: ${cache.sig}" cache.info:"${cache.info}"`);
//       FAILED_TEST_COUNT++;
//     } else {
//       console.log('✅ [TEST] "testCache" has passed');
//     }
//   };
//   console.log('###########################################');
//   console.log('###########################################');
//   console.log('###########################################');
//   console.log('###########################################');
//   console.log('############# STARTING TESTS ##############');
//   console.log('###########################################');
//   console.log('NOTE: Testing should be done on a physical device so the file storage permission can be easily enabled');
//   console.log('###########################################');
//   let urlss =  await ytdl(URL, { quality: 'highestaudio' });
//       let dl = FileSystem.createDownloadResumable(
//         urlss,
//         FileSystem.documentDirectory + 'file.mp4',
//         { },
//         progress => {}
//     );
//     dl.downloadAsync().then( () => console.log('start')).catch( e => console.log('error'));

//     dl.pauseAsync().then( result => console.log(result) );
    
//   console.log('Finished downloading to A');
//   const downloadSnapshotJson = await AsyncStorage.getItem('pausedDownload');
//   const downloadSnapshot = JSON.parse(downloadSnapshotJson);
//   const downloadResumable = new FileSystem.DownloadResumable(
//     downloadSnapshot.url,
//     downloadSnapshot.fileUri,
//     downloadSnapshot.options,
//     callback,
//     downloadSnapshot.resumeData
//   );

//   const { uri } = await downloadResumable.resumeAsync();
//     console.log('Finished downloading to ', uri);
//   try {
//     const { uri } = await downloadResumable.resumeAsync();
//     console.log('Finished downloading to ', uri);
//   } catch (e) {
//     console.error(e);
//   }
//   testURLIsValidAndVideoIdIsExtracted();
//   await testDownloadableURLIsSavedToFile();
//   testCache();

//   console.log('###########################################');
//   console.log('###########################################');
//   console.log('###########################################');
//   console.log('###########################################');
//   console.log('####### TESTS HAVE FINISHED RUNNING #######');
//   console.log(`############# ${FAILED_TEST_COUNT} TESTS FAILED `.padEnd(43, '#'));
//   console.log('###########################################');
 
// };
export default class Home extends React.Component {
 
 componentDidMount = async()=>{
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    })

    this.loadAudio()
  } catch (e) {
    console.log(e)
  }
};

loadAudio = async () =>{
  const {currentIndex, isPlaying, volume} = this.state
  console.log(currentIndex);
  try {
    const playbackInstance = new Audio.Sound()
    const source = {
      uri: audioPlaylist[currentIndex].uri
    }

    const status = {
      shouldPlay: isPlaying,
      volume
    }

    playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
    await playbackInstance.loadAsync(source, status, false)
    this.setState({playbackInstance})
    } catch (e) {
      console.log(e)
    }
};

 onPlaybackStatusUpdate = status => {
  this.setState({
    isBuffering: status.isBuffering
  })
};
 handlePlayPause = async () => {
  const { isPlaying, playbackInstance } = this.state
  isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

  this.setState({
    isPlaying: !isPlaying
  })
}

  handlePreviousTrack = async () => {
  let { playbackInstance, currentIndex } = this.state
  if (playbackInstance) {
    await playbackInstance.unloadAsync()
    currentIndex < audioPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
    this.setState({
      currentIndex : currentIndex
    })
    this.loadAudio()
  }
};

handleNextTrack = async () => {
  let { playbackInstance, currentIndex } = this.state
  if (playbackInstance) {
    await playbackInstance.unloadAsync()
    currentIndex < audioPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
    this.setState({
      currentIndex : currentIndex
    })
    this.loadAudio()
  }
};
  addUrl() {
    const {audioPlaylist} = this.state;
    audioPlaylist.unshift({uri: 'test'});
    //console.log(audioPlaylist);
    this.setState({ audioPlaylist: audioPlaylist.slice(0)});
  };
  state = {
      search: ''
  };
    updateSearch = (search) => {
        this.setState({ search });
      };
      teste () {
        runTests();
        
      }

      audios() {
        return audioPlaylist.map(function(news, i){
          return(
            <View key={i}>
              <Text>{news.uri}</Text>
            </View>
          );
        });
      }
    render() {
      const { search } = this.state;
      
        return (
            
            <SafeAreaView>
              <ScrollView style={style.scrollView} contentInsetAdjustmentBehavior="automatic" >
               <View style={style.view}>
                <SearchBar
                   barStyle="dark-content"
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <Text >{this.state.search} </Text>
                <Button
                style={style.title}
                title="Search"
               />
              </View>

              <View>
              {this.audios()}
              </View>
              <Image
                  style={style.albumCover}
                  source={{ uri: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg' }}
                />
              <View style={style.controls}>
                  
                <TouchableOpacity style={style.control} onPress={this.handlePreviousTrack}>
                  <Ionicons name='caret-back-outline' size={48} color='#444' />
                </TouchableOpacity>
                <TouchableOpacity style={style.control} onPress={this.handlePlayPause}>
                  {this.state.isPlaying ? (
                    <Ionicons name='pause-outline' size={48} color='#444' />
                      ) : (
                    <Ionicons name='ios-play-circle' size={48} color='#444' />
                  )}
                </TouchableOpacity>
                <TouchableOpacity style={style.control}  onPress={this.handleNextTrack}>
                  <Ionicons name='caret-forward-outline' size={48} color='#444' />
                </TouchableOpacity>
                </View>
            
              <Header />
              {global.HermesInternal == null ? null : (
                <View style={style.engine}>
                  <Text style={style.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={style.body}>
                <View style={style.sectionContainer}>
                  <Text style={style.sectionTitle}>Step One</Text>
                  <Text style={style.sectionDescription}>
                    Edit <Text style={style.highlight}>App.js</Text> to change this
                    screen and then come back to see your edits.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
          
        );
    }
  }
const style = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
    title:{
        fontSize:22,
        marginTop:70,
        marginLeft:10,
        width:150,
        color: 'blue',
        fontWeight: 'bold',
        backgroundColor: '#DF0101'
      }, 
    view:{
        marginTop:50,
        marginLeft:10,
    },
    controls: {
      marginLeft:50,
      flexDirection: 'row'
    },
    control: {
      margin: 20
    },

  albumCover: {
    marginLeft:60,
    padding:5,
    width: 250,
    height: 250
  },
})