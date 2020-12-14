import React,{ useState }  from 'react';
import { SearchBar } from 'react-native-elements';
import ytdl from "react-native-ytdl"
import { StyleSheet,View,SafeAreaView,ScrollView,Text,Alert,Button,TouchableOpacity,Image,Picker} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
// import { searchLyrics } from '../util/api';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function App() {

  const [urlfile, setUrl] = React.useState();
  const [selectedValue, setSelectedValue] = useState("selector lang");
 
  const [isPlaying, setisPlaying] = React.useState();
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
const [sound, setSound] = React.useState();
const [search, setSearch] = React.useState();
const [lyrics, setlyrics] = React.useState();
const [copyright, setcopyright] = React.useState();
const [trackingUrl, settrackingUrl] = React.useState();
const [addlyrics, setAddlyrics] = React.useState();

loadAudio = async () =>{ 

  console.log(search)
  console.log('Loading Sound');
  const youtubeURL = search;
  const urls = await ytdl(youtubeURL, { quality: 'highestaudio' });

  await setTimeout(() => {
  
  console.log(urls[0]["url"])
  }, 3000);
 
  //setUrl(urls[0]["url"])
  // const soundObject = new Audio.Sound();
  //     await soundObject.loadAsync({uri: "https://github.com/rougetsall/My_musicrouget/blob/master/assets/sonnerie-diphone.mp3"})
  //     // uri: "https://github.com/rougetsall/My_musicrouget/blob/master/assets/sonnerie-diphone.mp3"}
  const { sound } = await Audio.Sound.createAsync(
   require('../assets/audi2.mp3')
   //{uri: "https://r4---sn-cv0tb0xn-jqbr.googlevideo.com/videoplayback?expire=1607924864&ei=IKjWX-71J8HMW8b3qng&ip=89.90.147.30&id=o-AE7iTxYgAPDCcCXQsPDskPH0J3Dx3t2SWDudLSkEPxcK&itag=251&source=youtube&requiressl=yes&mh=hI&mm=31%2C29&mn=sn-cv0tb0xn-jqbr%2Csn-25glen7r&ms=au%2Crdu&mv=m&mvi=4&pl=18&initcwndbps=1222500&vprv=1&mime=audio%2Fwebm&ns=TQWYokCCcZiC7ZVNrwddT0MF&gir=yes&clen=3967521&dur=235.101&lmt=1604154789310241&mt=1607902848&fvip=6&keepalive=yes&c=WEB&txp=5431432&n=r6JVQvLWmmyJNXl5F&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhALBMWecFACDLlZL0xpve9VEs75DD0XAS7MllcHJ6S_A6AiBrjbuv7hfEwYEbDzyXSp8DSvLvi8aB4qlJSmWn6fUsGQ%3D%3D&ratebypass=yes&sig=AOq0QJ8wRAIgK5qo3E4xUwN9pTY7gz0YjgqZ0zDLUULAizyA2T_VkKkCIHRegLfYJbNB062aDkPb8n0CYcM9C7B9rEyFH4lNNJH6"}
 );
// await SoundPlayer.loadUrl({uri: "https://raw.githubusercontent.com/rougetsall/My_musicrouget/master/assets/sonnerie-diphone.mp3"})
 await setTimeout(() => {

  setSound(sound);
  setImage(true)
   setisPlaying(false)
   iconeplay()
   setlang(true)
 }, 7000);

};


loadlyrics = async() =>{
  setlyrics("les parole : ")

  const infosartice = addlyrics.split(',');
  const name = infosartice[0];
  const title = infosartice[1];
  console.log(name +' et '+title)
  const API_KEY = '51e607101d80c3ef2ed9492c55f0db61';
  await fetch(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=${name}&q_track=${title}&page_size=15&page=1&s_track_rating=desc&apikey=${API_KEY}`)
      .then((chart)=> chart.json())
      .then((chartJson)=>{
        setTimeout(() => {
          chartJson.message.body.track_list.forEach(element => {
              fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${element.track["track_id"]}&apikey=${API_KEY}`)
                .then((chart)=> chart.json())
                .then((chartJson)=>{
                 
                    if (chartJson.message.body.lyrics.lyrics_body != null) {
                      console.log(chartJson.message.body.lyrics.lyrics_body)
                      setlyrics(lyrics+chartJson.message.body.lyrics.lyrics_body)
                    }
                   
                    // if (chartJson.message.body.lyrics["lyrics_body"]) {
                    //   settextlyrics(textlyrics+chartJson.message.body.lyrics["lyrics_body"])
                      
                    // }
                  
                }).catch((error) => {
                    console.error(error);
                  });
          });
          setAffichlycs(true)
          setlang(true)
        //  setAddlyrics( chartJson.message.body.lyrics)
          }, 7000);
      }).catch((error) => {
          console.error(error);
        });
  //getLyrics(name,title)
//   setTimeout(() => {
//     console.log(textlyrics)
 
//  }, 7000);
}

const [image, setImage] = React.useState();
imagesound = ()=>{
  if (image == true) {
    return(
      <Image
        style={style.albumCover}
        source={{ uri: 'https://media.wired.com/photos/5f9ca518227dbb78ec30dacf/master/w_2560%2Cc_limit/Gear-RIP-Google-Music-1194411695.jpg' }}
      />
    );
  } 
}
const [lang, setlang] = React.useState();
selectorLang =()=>{
  if (lang == true) {
    return (

      <View style={style.selector}>
        <Picker
          selectedValue={selectedValue}
          style={ {height: 50,
            width: 160,marginTop:5}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="selector langue"  />
          <Picker.Item label="french" value="french" />
          <Picker.Item label="anglais" value="anglais" />
          <Picker.Item label="espagnols" value="espagnols" />
          <Picker.Item label="italien" value="italien" />
          <Picker.Item label="arabe" value="arabe" />
        
        </Picker>
      </View>
    );
  }
}
iconeplay = ()=>{
  if (isPlaying==null) {
    return(
      <Text></Text>
    );
  }
  if (isPlaying == false) {
    return(
      <Ionicons name="ios-play-circle" nameicone size={60} color='#444' />
    );
  } else {
    return(
      <Ionicons name="pause-outline" nameicone size={60} color='#444' />
    );
  }
}
 handlePlayPause = async () => {
  iconeplay();
   console.log(isPlaying )
  if ( isPlaying == false) {
    console.log("false")
    playSound()
    setisPlaying(true)
  } 
  if ( isPlaying == true) {
    console.log("true")
    pauseSound();
    setisPlaying(false)
  }

}
 
  playSound = async () => {
    await sound.playAsync()
  }
  pauseSound = async () => {
    await sound.pauseAsync()
  }
    updateSearch = (search) => {
        setSearch( search )
      };
  updatelyrics = (addlyrics) => {
    setAddlyrics( addlyrics )
  };
// getLyrics = (name,title) => {
//   searchLyrics(name,title)
//       .then(result => {
//         setlyrics(result.lyrics_body)
//         setcopyright(result.lyrics_copyright)
//         settrackingUrl(result.pixel_tracking_url)
//         setAffichlycs(true)
//       })
//       .catch((error) => {
//           throw error;
//   });
// };
const [affichlycs, setAffichlycs] = React.useState();
affichelyrics  =()=>{
  if (affichlycs == true) {
   
    return (
      <View style={ style.container }>
          
          <ScrollView contentContainerStyle={ style.scrollView }>
              <Text style={ style.lyrics }>{lyrics}</Text>
          </ScrollView>
      </View>
  );
  }
    
}
    
     return (
          
            <SafeAreaView>
              <ScrollView style={style.scrollView} contentInsetAdjustmentBehavior="automatic" >
               <View style={style.view}>
               <Text style={style.logorouget} >Rouget Music </Text>
                <SearchBar
                   barStyle="dark-content"
                    placeholder="Link youtube..."
                    onChangeText={updateSearch}
                    value={search}
                />
                <Text >{search} </Text>
               
                <Button style={style.addsound} title="add sound" onPress={loadAudio} />

                { imagesound()}
             
                  <View style={style.controls}>

                    <TouchableOpacity style={style.control} onPress={handlePlayPause}>
                        {iconeplay()}
                    </TouchableOpacity>
                  </View>
                  <SearchBar
                   barStyle="dark-content"
                    placeholder="Nome artice , Titre sound"
                    onChangeText={updatelyrics}
                    value={addlyrics}
                />
                 <Button style={style.addsound} title="add lyrics" onPress={loadlyrics} />
                 <Image
                  style={style.albumCover}
                  source={{ uri: 'https://images-eu.ssl-images-amazon.com/images/I/419wjp7euJL.png' }}
                />
                  {selectorLang()}
                
              </View>
              <View>
              {affichelyrics()}
              </View>
            
            </ScrollView>

           
          </SafeAreaView>
          
        );
    
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
 
    view:{
        marginTop:50,
        marginLeft:10,
    },
    controls: {
      marginLeft:50,
      flexDirection: 'row'
    },
    control: {
      marginLeft: 100
    },

  albumCover: {
    marginLeft:60,
    padding:5,
    width: 250,
    height: 250
  },
  selector: {
    alignItems: "center",
   
  },
  parole:{
  marginLeft:30,
  fontSize:15,
  marginTop:120
  },
  lyrics: {
    flex: 1,
    fontSize: 17,
    textAlign: "center"
},
logorouget:{
  
    fontSize: 20,
    textAlign: "center"
}
})