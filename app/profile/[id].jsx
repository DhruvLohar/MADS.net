import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';

import { useGlobalSearchParams } from "expo-router";
import Tab from '../../components/utils/Tab';

const Profile = () => {
  const { id } = useGlobalSearchParams();
  
  const tabs = ['Details', 'Projects'];
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <View style={[LAYOUTS.screenView, { alignItems: 'center', backgroundColor: COLORS.primaryLight }]}>
        <StatusBar style={"light"} />

        {/* Header */}

        {/* <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Profile For {id}</Text> */}
        {/* style={{ position: "absolute", top: 10, left: 0 }} */}
        <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={styles.bgEllipse}></View>
          <Image style={styles.imageCircle} source={require("../../assets/profile.jpeg")} />

          <Text style={TYPOGRAPHY.Heading}>Sara Jones</Text>
          <Text style={[TYPOGRAPHY.Body, { textAlign: 'center' }]}>Love learning about fullstack development and exploring Artifical Intelligence</Text>

          <View style={{ flexDirection: 'row', marginVertical: 20 }}>
            <View style={{ alignItems: 'center', marginRight: 20 }}>
              <Text style={[TYPOGRAPHY.Header, { opacity: .6 }]}>MADS POINTS</Text>
              <Text style={TYPOGRAPHY.SubTitle}>69</Text>
            </View>
            <View style={{ alignItems: 'center', marginLeft: 20 }}>
              <Text style={[TYPOGRAPHY.Header, { opacity: .6 }]}>PROJECTS</Text>
              <Text style={TYPOGRAPHY.SubTitle}>4</Text>
            </View>
          </View>
          <View style={[LAYOUTS.screenView, { marginTop: 0 }]}>
            <View style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {tabs.map((item, idx) => (
                <Tab key={idx} title={item} isActive={active === item} switchTab={() => setActive(item)} />
              ))}
            </View>
            {active === tabs[0] ? (
              <View style={{ marginTop: 30 }}>
                <Text>Show Details</Text>
              </View>
            ) : (
              <View style={{ marginTop: 30 }}>
                <Text>Show Projects</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

export default Profile;

const ellipseSize = Dimensions.get('screen').width + 250;

const styles = StyleSheet.create({
  bgEllipse: {
    width: ellipseSize,
    height: ellipseSize,
    backgroundColor: COLORS.primaryDark,
    borderRadius: ellipseSize / 2,
    marginTop: -(ellipseSize / 1.4)
  },

  imageCircle: {
    width: 180,
    height: 180,
    borderRadius: 200,
    objectFit: 'contain',
    marginTop: -100,
    marginBottom: 10
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    margin: 10,
    width: 300,
    height: 300
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    margin: 10,
  },
  pillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  pill: {
    backgroundColor: '#0B2B26',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  pillText: {
    color: 'white',
    fontSize: 14,
  },
});

/*
import { Dimensions, Image, Text, View } from 'react-native';
import Card from './component/Card';

export default function App() {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
  <View style={{backgroundColor:"#DAD7CD", height:"100%"}}>
  <View style={{flexDirection:"row", justifyContent:"space-between", zIndex:2, position:"relative", top:screenHeight*0.06, marginLeft:screenWidth*0.06, marginRight:screenWidth*0.04, alignItems:"center"}}>
         <Image source={require("./assets/_.png")}/>
         <Text style={{fontWeight:"500",fontSize:32,color:"white"}}>mohit</Text>
         <Image source={require("./assets/Settings.png")}/>
       </View> 
    <View style={{borderBottomLeftRadius:screenWidth*1.5 , borderBottomRightRadius:screenWidth*1.5 ,borderTopLeftRadius:screenWidth*1.5 ,borderTopRightRadius:screenWidth*1.5 , backgroundColor:'#0B2B26', height:600, width:600, position:"relative", bottom:screenHeight*0.55, right:screenWidth*0.267}}>
      <View style={{position:"absolute", bottom:-70, left:215}}>
      <Image source={require("./assets/Ellipse.png")}/>
      </View>
    </View>
        <View style={{marginLeft:10, marginRight:10, position:"absolute", top:300}} >
          <View style={{flexDirection:"row", justifyContent:"space-around"}} >
            <View >
              <Text style={{fontSize:20, fontWeight:"500"}}>MADS POINT</Text>
              <Text style={{textAlign:"center"}}>69</Text>
            </View>
          <View >
            <Text style={{fontSize:20, fontWeight:"500"}}>PROJECTS</Text>
            <Text style={{textAlign:"center"}}>69</Text>
          </View>
         </View>
         <Text style={{marginLeft:screenWidth*0.03, marginRight:screenWidth*0.03, textAlign:"center"}}>Student at RGIT | Full stack web developer | React JS
  Node JS  Django </Text>
        </View>
        <View style={{marginTop:screenHeight*0.03,marginLeft:screenWidth*0.065, position:'absolute',top:screenHeight*0.5}}>
          <Text  style={{fontSize:32,}}>PROJECTS</Text>
          <View style={{alignItems:"center"}}>
          <Card
        imageSource={require('./assets/Project_card.png')}
        title="Card Title"
        pill1Text="React"
        pill2Text="Django"
        pill3Text="Mongo"
      />
          </View>
        </View>
  </View>
  );
}
*/