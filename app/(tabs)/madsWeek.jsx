import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';


const MADSWeekView = () => {
    return (
        <>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primaryLight, position: "relative", }]}>
                <StatusBar style={"dark"} />

                <View style={[LAYOUTS.screenView, { marginTop: 30 }]}>
                    <Text style={TYPOGRAPHY.Heading}>MADS Week is Live!</Text>
                    <Text style={TYPOGRAPHY.Body}>Compete with your mates and show your creativity !</Text>
                </View>
            </View>
        </>
    );
}

export default MADSWeekView;