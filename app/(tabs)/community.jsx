import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';


const CommunityView = () => {
    return (
        <>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primaryLight }]}>
                <StatusBar style={"dark"} />

                <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Community Code Goes here</Text>
            </View>
        </>
    );
}

export default CommunityView;