import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';

import { useGlobalSearchParams } from "expo-router";

const Profile = () => {
    const { id } = useGlobalSearchParams();

    return (
        <>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primaryLight }]}>
                <StatusBar style={"dark"} />

                <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Profile For {id}</Text>
            </View>
        </>
    );
}

export default Profile; 

/*
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, View } from 'react-native';
import Card from './component/card';

export default function App() {
  return (
  <View style={{backgroundColor:"#DAD7CD", height:"100%"}}>
  <View style={{flexDirection:"row", justifyContent:"space-between", zIndex:2, position:"relative", top:45, marginLeft:10, marginRight:10, alignItems:"center"}}>
         <Image source={require("./assets/_.png")}/>
         <Text style={{fontWeight:"500",fontSize:32,color:"white"}}>momo jain</Text>
         <Image source={require("./assets/Settings.png")}/>
       </View> 
    <View style={{borderBottomLeftRadius:600 , borderBottomRightRadius:600,borderTopLeftRadius:600,borderTopRightRadius:600, backgroundColor:'#0B2B26', height:600, width:600, position:"relative", bottom:410, right:110}}>
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
         <Text style={{marginLeft:20, marginRight:20, textAlign:"center"}}>Student at RGIT | Full stack web developer | React JS
  Node JS  Django </Text>
        </View>
        <View style={{marginTop:20,marginLeft:20, position:'absolute',top:400}}>
          <Text  style={{fontSize:32,}}>PROJECTS</Text>
          <View style={{alignItems:"center"}}>
          <Card
        imageSource={require('./assets/Project_card.png')}
        title="Card Title"
        pill1Text="Pill 1"
        pill2Text="Pill 2"
        pill3Text="Pill 3"
      />
          </View>
        </View>
  </View>
  );
}

*/
