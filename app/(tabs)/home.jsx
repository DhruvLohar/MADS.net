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
        </>
    );
}

export default HomeView;