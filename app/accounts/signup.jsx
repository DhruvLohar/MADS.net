import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button, { TextButton } from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { useRouter } from 'expo-router';

const SignupView = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log("Login Clicked");
    }

    return (
        <>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primary }]}>
                <StatusBar style={"light"} />

                <View style={{ alignSelf: "center", marginTop: 60 }}>
                    <Image source={require("../../assets/LOGO-LIGHT.png")} style={LAYOUTS.LogoImage} />
                </View>

                <View style={styles.container}>
                    <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Getting Started</Text>
                    <Text style={[TYPOGRAPHY.Body, { opacity: .5 }]}>Good to see you back! Continue your college journey with MADS Network !</Text>

                    <View style={{ marginBottom: 25, marginTop: 20 }}>
                        <Input placeHolder="Enter your name" iconNamePrefix="user" type='name' />
                        <Input placeHolder="Enter your email" iconNamePrefix="sms" type='email' />
                        <Input placeHolder="Enter your password" iconNamePrefix="lock" iconNameSuffix={true} type='current-password' />
                    </View>

                    <Button title="Create my account" onPress={handleSubmit} type={"fill"} />
                    <Button title="Already have an account?" onPress={() => router.push('/accounts/login')} type={"outline"} />
                </View>
            </View>
        </>
    );
}

export default SignupView;

const styles = StyleSheet.create({
    globe: {
        width: 160,
        height: 160,
        resizeMode: 'contain'
    },

    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: COLORS.primaryLight,

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
});