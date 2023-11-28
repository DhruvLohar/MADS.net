import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button, { TextButton } from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { Lock, Sms } from 'iconsax-react-native';

import axios from 'axios';
import { Formik } from 'formik';
import { API_URL, axiosAuthorized, axiosInstance } from '../../components/services/api';

const LoginView = () => {
    const router = useRouter();

    const initialValues = {
        email: '',
        password: ''
    }
    
    const setStorage = async (data) => {
        await AsyncStorage.setItem('userId', data.id.toString())
        await AsyncStorage.setItem('name', data.name)
        await AsyncStorage.setItem('token', data.token)
    }

    const handleLogin = (values) => {
        // await AsyncStorage.setItem("name", "Dhruv");
        // error.response.data.message
        axios.post(API_URL +  "/student/login/", values)
            .then(response => {
                setStorage(response.data);
                router.push('/home');
            })
            .catch(error => {
                if (error.response) {
                    console.log("Error Status Code:", error.response.status);
                    console.log("Error Response Data:", error.response.data);
                    alert(error.response.data.message);
                } else if (error.request) {
                    console.log("No response received");
                } else {
                    console.log("Error:", error.message);
                }
            })
    }

    return (
        <ScrollView style={{ backgroundColor: COLORS.primaryLight }}>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primary }]}>
                <StatusBar style={"light"} />

                <View style={{ alignSelf: "center", marginTop: 60 }}>
                    <Image source={require("../../assets/LOGO-LIGHT.png")} style={LAYOUTS.LogoImage} />
                </View>

                <View style={styles.container}>
                    <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Welcome Back</Text>
                    <Text style={[TYPOGRAPHY.Body, { opacity: .5 }]}>Where have you being? Continue your college journey with MADS Network!</Text>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleLogin}
                    >
                        {({ handleChange, isValid, handleSubmit, values }) => (
                            <>
                                <View>
                                    <View style={{ marginBottom: 25, marginTop: 20 }}>
                                        <Input placeHolder="Enter your email" type='email' IconPrefix={Sms}
                                            handleFormik={{ name: 'email', onChange: handleChange, value: values.email }}
                                        />
                                        <Input placeHolder="Enter your password" IconPrefix={Lock} iconNameSuffix={true} type='current-password'
                                            handleFormik={{ name: 'password', onChange: handleChange, value: values.password }}
                                        />

                                        <TextButton title={"Forgot Password?"} onPress={() => router.push('/accounts/forgotPassword')} />
                                    </View>
                                </View>
                                <Button title="Login" onPress={handleSubmit} type={"fill"} disabled={!isValid} />
                            </>
                        )}
                    </Formik>

                    <Button title="Create an account" onPress={() => router.push('/accounts/signup')} type={"outline"} />
                </View>
            </View>
        </ScrollView>
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: COLORS.primaryLight,

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
});