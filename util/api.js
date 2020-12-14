const API_KEY = '51e607101d80c3ef2ed9492c55f0db61';

const searchLyrics = async (url, path) =>{ 
    fetch(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=${name}&q_track=${title}&s_track_rating=desc&apikey=
    =${API_KEY}`) 
    .then((chart)=> chart.json())
    .then((chartJson)=>{

        const lyrics = chartJson.message.body.track_list;
        return lyrics ? lyrics : {};
    })
    .catch((err)=>{
        console.warn(err.message)
    })
}
export default searchLyrics;