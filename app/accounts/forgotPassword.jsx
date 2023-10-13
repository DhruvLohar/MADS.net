import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button, { TextButton } from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { useRouter } from 'expo-router';

const ForgotPasswordView = () => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log("Frogot Password");
    }

    return (
        <>
            <View style={[LAYOUTS.flexCenter, {backgroundColor: COLORS.primary}]}>
                <StatusBar style={"light"} />

                <View style={{alignSelf: "center", marginTop: 60}}>
                    <Image source={require("../../assets/LOGO-LIGHT.png")}  style={LAYOUTS.LogoImage} />
                </View>

                <View style={styles.container}>
                    <Text style={[TYPOGRAPHY.Heading, {marginTop: 35}]}>Forgot Password?</Text>
                    <Text style={[TYPOGRAPHY.Body, {opacity: .5}]}>Regain access to your account with a password reset. It's simple and secure.</Text>

                    <View style={{marginBottom: 25, marginTop: 20}}>
                        <Input placeHolder="Enter your email" iconNamePrefix="sms" type='email' />
                    </View>

                    <Button title="Submit" onPress={handleSubmit} type={"fill"} />
                    <Button title="Cancel" onPress={() => router.push('/accounts/login')} type={"outline"} />
                </View>
            </View>
        </>
    );
}

export default ForgotPasswordView;

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