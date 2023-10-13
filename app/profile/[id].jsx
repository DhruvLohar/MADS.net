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