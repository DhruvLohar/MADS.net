import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeView = () => {
  const [current, setCurrent] = useState('black');
  const [name, setName] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("name").then((res) => {
      setName(res)
    })
  }, [])

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
    <>
      <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
        <StatusBar style={"dark"} />

        <View style={[LAYOUTS.screenView, { marginTop: 30 }]}>
          <Text style={TYPOGRAPHY.Heading}>Hi, {name}!</Text>
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

        </View>
      </View>
    </>
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

