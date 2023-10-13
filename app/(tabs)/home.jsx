import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';


const HomeView = () => {
    return (
        <>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primaryLight }]}>
                <StatusBar style={"dark"} />

                <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Home Page</Text>
            </View>

            {/*
            <SafeAreaView style={styles.backgroundColor}>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:"center" }}>
       <Image source={require("./assets/menu.png")}
                    style={{marginLeft:18, marginTop:20}} />
       <Image source={require("./assets/Ellipse.png")}
                    style={{height:38, width:38,marginTop:20, marginRight:15}} />             
    </View>
    
      <View style={{flexDirection:"column", alignItems:"center",justifyContent:"space-between"}}>
        <View>
        <Text style={{fontSize:32, textAlign:"left", marginTop:40,marginLeft:20}}>Hey Dhruv!!</Text>
       <Text style={{fontSize:14,textAlign:"left",marginLeft:20}}>Check out what other students are up to!</Text>
       <View style={styles.container}>
       <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / windowWidth);
          setCurrentImageIndex(newIndex);
        }}
      />
      <Text style={styles.pageIndicator}>{`${currentImageIndex + 1} / ${images.length}`}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
        </View>
        <View style={{position:"relative", bottom: 750 }}>
        <Text style={{fontSize:32, textAlign:"left", marginTop:20}}>Weekly Test</Text>
      
       <Image source={require("./assets/rectangle1.png")}
                    style={{marginTop:20}} />
        </View>
     </View>
    </SafeAreaView>
            */}
        </>
    );
}

export default HomeView;

/* 
 const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: Dimensions.get('window').width, // Display one image at a time
      height: 300, // Adjust the height as needed
    },
    pageIndicator: {
      alignSelf: 'center',
      marginVertical: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
    },
  });
*/
