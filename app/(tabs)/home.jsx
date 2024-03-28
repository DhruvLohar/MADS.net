import React, { useEffect, useState } from 'react';
import { useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/Auth';

const HomeView = () => {

  const router = useRouter()

  const { authState } = useAuth()
  const [current, setCurrent] = useState('black');

  const handleSwipeRight = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setCurrent('yellow')
    }
  };

  const handleSwipeLeft = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setCurrent("black")
    }
  };

  return (
    <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
      <StatusBar style={"dark"} />

      <Text style={TYPOGRAPHY.Heading}>Hi, {authState.username}!</Text>
      <Text style={TYPOGRAPHY.Body}>Check out what others students are up to ...</Text>

      <FlingGestureHandler direction={Directions.RIGHT}
        onHandlerStateChange={handleSwipeRight}
      >
        <FlingGestureHandler direction={Directions.LEFT}
          onHandlerStateChange={handleSwipeLeft}>

          <View style={{ width: "100%", marginTop: 20 }}>
            <View style={{ width: "100%", height: 200, borderRadius: 20, backgroundColor: current }}></View>
          </View>

        </FlingGestureHandler>
      </FlingGestureHandler>

      <Pressable onPress={() => router.push("/profile/5")} style={{marginTop: 10}}>
        <Text>Check out Dhruv's Profile</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default HomeView;


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

