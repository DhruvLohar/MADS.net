import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Button, { TextButton } from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { Lock, Sms, User } from 'iconsax-react-native';

import { Formik } from 'formik';
import axios from 'axios';
import { API_URL } from '../../components/services/api';

const SignupView = () => {
    const router = useRouter();

    const handleSignup = (values) => {
        axios.post(API_URL + "/student/", values)
            .then(response => {
                // setStorage(response.data);
                alert("Account Created!")
                router.push('/accounts/login');
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.data.email) {
                        alert(error.response.data.email);
                    } else {
                        alert(error.response.data.message);
                    }
                    console.log("Error Response Data:", error.response.data);
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
                    <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Getting Started</Text>
                    <Text style={[TYPOGRAPHY.Body, { opacity: .5 }]}>Good to see you back! Continue your college journey with MADS Network !</Text>
                    
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        onSubmit={handleSignup}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <View style={{ marginBottom: 25, marginTop: 20 }}>
                                    <Input placeHolder="Enter your name" IconPrefix={User} type='name'
                                        handleFormik={{ name: 'name', onChange: handleChange, value: values.name }}
                                    />
                                    <Input placeHolder="Enter your email" IconPrefix={Sms} type='email'
                                        handleFormik={{ name: 'email', onChange: handleChange, value: values.email }}
                                    />
                                    <Input placeHolder="Enter your password" IconPrefix={Lock} iconNameSuffix={true} type='current-password'
                                        handleFormik={{ name: 'password', onChange: handleChange, value: values.password }}
                                    />
                                </View>
                                <Button title="Create my account" onPress={handleSubmit} type={"fill"} />
                            </>
                        )}
                    </Formik>

                    <Button title="Already have an account?" onPress={() => router.push('/accounts/login')} type={"outline"} />
                </View>
            </View>
        </ScrollView>
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