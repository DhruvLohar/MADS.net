import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button, { TextButton } from "../../components/utils/Button";
import Input from "../../components/utils/Input";
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { Sms } from 'iconsax-react-native';

import { Formik } from 'formik';

const ForgotPasswordView = () => {
    const router = useRouter();

    const handleSubmit = (values) => {
        console.log("Frogot Password");
    }

    return (
        <>
            <View style={[LAYOUTS.flexCenter, { backgroundColor: COLORS.primary }]}>
                <StatusBar style={"light"} />

                <View style={{ alignSelf: "center", marginTop: 60 }}>
                    <Image source={require("../../assets/LOGO-LIGHT.png")} style={LAYOUTS.LogoImage} />
                </View>

                <View style={styles.container}>
                    <Text style={[TYPOGRAPHY.Heading, { marginTop: 35 }]}>Forgot Password?</Text>
                    <Text style={[TYPOGRAPHY.Body, { opacity: .5 }]}>Regain access to your account with a password reset. It's simple and secure.</Text>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <View style={{ marginBottom: 25, marginTop: 20 }}>
                                    <Input placeHolder="Enter your email" IconPrefix={Sms} type='email' 
                                        handleFormik={{name: 'email', onChange: handleChange, value: values.email}}  
                                    />
                                </View>

                                <Button title="Submit" onPress={handleSubmit} type={"fill"} />
                            </>
                        )}
                    </Formik>
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: COLORS.primaryLight,

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
});