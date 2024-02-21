import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,SafeAreaView, Image } from 'react-native';

const App = () => {
  const [present, setPresent] = useState('main');
  const firstPage = {
    image: '',
    name: 'Jester Nicholas C. Asoy',
    course: 'Bachelor Of Science In Information Technology'
  }
  const educPage = {
   elem: 'Catmon Integrated School',
   elemYear: '2010'
  }
  const hobbies = {
    first: 'Watching Movies',
    sec: 'Playing Online Games'
  }

  const handlePress = () => {
    setPresent((prev) => {
      switch (prev) {
        case 'main':
          return 'education';
        case 'education':
          return 'Hobbies';
          case 'Hobbies':
          return 'contact';
          case 'contact':
          return 'project';
        default:
          return 'main';
      }
    });
  };
      let imagePath = { uri: 'https://lh3.googleusercontent.com/a/ACg8ocJt9vwGvgWepPjXtziVLvwsn8UM31GWH_MMwLdEwPBrUA=s288-c-no' };
      let online = { uri: 'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-055bbe0f10c1778fcbd134f2de02daf6' };
       let movie = { uri: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaqnFL7AryVgxeUDe2Vfy6L3-exIaIcYfxt3nb1U9nrE1Ib7oULnmcxe8arkmlZlqHH9DLCS8ocYyGtw9jQbqZRO9CAJq5fPW8Av.jpg?r=ce4' };
let portal = { uri: 'https://img.hotimg.com/Screenshot-2024-02-21-185907.png' };


  return (
    <SafeAreaView style={styles.whole}>
    <TouchableOpacity onPress={handlePress}>
      {present === 'main' && (
        <View style={styles.container}>
          <Image source={imagePath} style={{width: 250, height: 250, marginBottom: 10, borderRadius: 50}} />
          <Text style={styles.Text}>{firstPage.name}</Text>
           <View style={styles.bgName}>
            <Text style={styles.course}>{firstPage.course}</Text>
          </View>
        </View>
      )}
      {present === 'education' && (
        <View style={styles.secPage}>
            <Text style={styles.backg}>My Background Education</Text>
            <View style={styles.around}>
            <Text style={styles.bgelem}>Elementary</Text>
                <Text style={styles.secText}>{educPage.elem}</Text>
                <Text style={styles.secYear}>{educPage.elemYear}</Text> 
            </View>
            <View style={styles.around}>
            <Text style={styles.bgelem}>High School</Text>
                <Text style={styles.secText}>{educPage.elem}</Text>
                <Text style={styles.secYear}>2016</Text> 
            </View>
            <View style={styles.around}>
            <Text style={styles.bgelem}>Senior High</Text>
                <Text style={styles.secText}>Arellano University</Text>
                <Text style={styles.secYear}>2019</Text> 
            </View>
            <View style={styles.around}>
            <Text style={styles.bgelem}>College</Text>
                <Text style={styles.secText}>Global Reciprocal Colleges</Text>
                <Text style={styles.secYear}>2021</Text> 
            </View>
        </View>
                
      )}
       {present === 'Hobbies' && (
         <View style={styles.secPage}>
            <Text style={styles.backg}>My Hobbies</Text>
            <View style={styles.around}>
            <Text style={styles.bgelem}>Online Games</Text>
             <Image source={online} style={{width: 300, height: 200, borderRadius: 10, alignItems: 'center'}} />
                <Text style={styles.secYear}>VALORANT</Text> 
            </View>
            <View style={styles.around}>
            <Text style={styles.bgelem}>Watching Movies</Text>
                <Image source={movie} style={{width: 300, height: 200, marginBottom: 10, borderRadius: 10, alignItems: 'center'}} />
                <Text style={styles.secYear}>Enola Holmes</Text> 
            </View>
        </View>
      )}
       {present === 'contact' && (
         <View style={styles.secPage}>
            <Text style={styles.backg}>My Contact</Text>
            <View style={styles.around}>
            <Text style={styles.bgelem}>My Number</Text>
                <Text style={styles.secYear}>09813780130</Text> 
            </View>
            <View style={styles.around}>
            <Text style={styles.bgelem}>My Address</Text>
                <Text style={styles.secYear}>No 1 esperanza ST. Don Pedro Village. Marulas Val. City.</Text> 
            </View>

        </View>
      )}
      {present === 'project' && (
         <View style={styles.secPage}>
            <Text style={styles.backg}>My Project</Text>
            <View style={styles.around}>
            <Text style={styles.bgelem}>Student Portal</Text>
             <Image source={portal} style={{width: 300, height: 200, marginBottom: 10, borderRadius: 10, alignItems: 'center'}} />
            </View>
        </View>
      )}
    </TouchableOpacity>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  bgelem:{
    backgroundColor: '#9BCF53',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 20, 
    justifyContent: 'center',
    marginTop: 30
  },
 container:{
     justifyContent: 'center',
     alignItems: 'center',
     textAlign: 'center',
     marginTop: 100
 },
 secPage:{
    backgroundColor: '#416D19',
    padding: 50,
    height: 1000

 },
 around:{
   alignSelf: 'around',
   marginTop: 20,
   fontSize: 30
 },
 secYear:{
   fontSize: 20,
   marginTop: 2,
   color: 'white'
 },
 backg:{
    backgroundColor: '#FFF67E',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold'
    
 },
  secText:{
    color: 'white',
    fontWeight: 40,
    fontSize: 20
  },
 bgName: {
   backgroundColor: '#416D19',
   padding: 10,
  borderRadius: 10,
  marginTop: 15,

  },
  Text:{
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto', 
    textAlign: 'center',
    
  },
  course:{
    fontSize: 16,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  educ:{
    fontSize: 30
  }

});

export default App;