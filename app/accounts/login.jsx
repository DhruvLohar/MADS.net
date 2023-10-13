import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


import Button, { TextButton } from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { useRouter } from 'expo-router';

const LoginView = () => {
    const router = useRouter();

    const handleLogin = () => {
        console.log("Login Clicked");
    }

    return (
        <>
            <View style={[LAYOUTS.flexCenter, {backgroundColor: COLORS.primary}]}>
                <StatusBar style={"light"} />

                <View style={{alignSelf: "center", marginTop: 60}}>
                    <Image source={require("../../assets/LOGO-LIGHT.png")}  style={LAYOUTS.LogoImage} />
                </View>

                <View style={styles.container}>
                    <Text style={[TYPOGRAPHY.Heading, {marginTop: 35}]}>Welcome Back</Text>
                    <Text style={[TYPOGRAPHY.Body, {opacity: .5}]}>Where have you being? Continue your college journey with MADS Network!</Text>

                    <View style={{marginBottom: 25, marginTop: 20}}>
                        <Input placeHolder="Enter your email" iconNamePrefix="sms" type='email' />
                        <Input placeHolder="Enter your password" iconNamePrefix="lock" iconNameSuffix={true} type='current-password' />
                        
                        <TextButton title={"Forgot Password?"} onPress={() => router.push('/accounts/forgotPassword')} />
                    </View>

                    <Button title="Login" onPress={handleLogin} type={"fill"} />
                    <Button title="Create an account" onPress={() => router.push('/accounts/signup')} type={"outline"} />
                </View>
            </View>
        </>
    );
}

export default LoginView;

const styles = StyleSheet.create({
    globe: {
        width: 160,
        height: 160,
        resizeMode: 'contain'
    },

    container: {
        flex: 1,
        justifyContent:"flex-start",
        alignItems: "flex-start",
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: COLORS.primaryLight,

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
});